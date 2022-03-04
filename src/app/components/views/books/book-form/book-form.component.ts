import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '@book-store/views/books/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryCombo, CategoryService } from '@book-store/views/shared';
import { BookService } from '@book-store/views/shared/book.service';
import { SnackService } from '@book-store/components/shared';
import { map, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: [ './book-form.component.scss' ],
})
export class BookFormComponent implements OnInit {
  idBook!: number;
  currentAction!: string;
  bookForm!: FormGroup;
  pageTitle: string = `Criando novo livro`;
  categories: CategoryCombo[] = [];
  categoriesControl = new FormControl(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private service: BookService,
    private snackService: SnackService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setCurrentAction();
    this.loadCategoryCombo();
    this.loadBook();
  }

  submitForm(): void {
    if ( this.currentAction === 'new' ) {
      this.create({ ...this.bookForm.getRawValue() });
    } else {
      this.update({ id: this.idBook, ...this.bookForm.getRawValue() });
    }
  }

  async cancel(): Promise<void> {
    const idCategory = this.bookForm.getRawValue().idCategory!;
    await this.router.navigate([ 'categories', idCategory, 'books' ]);
  }

  private initForm(): void {
    this.bookForm = this.formBuilder.group({
      title: [ null, Validators.required ],
      idCategory: this.categoriesControl,
      author: [ null, Validators.required ],
      content: [ null, Validators.required ],
    });
  }

  private loadCategoryCombo(): void {
    const idCategory = +this.route.snapshot.paramMap.get('idCategory')!;
    this.categoryService.findAllAsCombo()
      .subscribe(categories => {
        this.categoriesControl.patchValue(idCategory);
        this.categories = categories;
      });
  }

  private setCurrentAction(): void {
    const LAST_SEGMENT_URL = 0;
    let path = this.route.snapshot.url[LAST_SEGMENT_URL].path;
    if ( path === 'new' ) {
      this.bookForm.controls['idCategory'].disable();
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private create(newBook: Book): void {
    this.service.save(newBook).subscribe(async book => {
      this.snackService.message({ message: `Livro criado com sucesso` });
      await this.router.navigate([ 'categories', book.idCategory, 'books' ]);
    });
  }

  private update(book: Book): void {
    this.service.update(book).subscribe(async book => {
      this.snackService.message({ message: `Livro atualizado com sucesso` });
      await this.router.navigate([ 'categories', book.idCategory, 'books' ]);
    });
  }

  private loadBook(): void {
    if ( this.currentAction === 'edit' ) {
      this.route.paramMap.pipe(
        take(1),
        map(param => +param.get('id')!),
        tap((idBook: number) => this.idBook = idBook),
        switchMap(idBook => this.service.findById(idBook).pipe(take(1))),
      ).subscribe(book => {
        this.bookForm.patchValue(book);
      });
    }
  }
}
