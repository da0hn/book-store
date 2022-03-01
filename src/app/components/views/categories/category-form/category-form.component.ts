import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, CategoryService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackService } from '../../../shared';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-form.component.html',
  styleUrls: [ './category-form.component.scss' ],
})
export class CategoryFormComponent implements OnInit {

  categoryForm!: FormGroup;
  currentAction!: string;
  idCategory!: number;

  constructor(
    private service: CategoryService,
    private snackbarService: SnackService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.initForm();
    this.loadCategory();
  }

  create(category: Category) {
    this.service.create(category)
      .subscribe(async _ => {
        this.snackbarService.message({ message: 'Categoria criada com sucesso!' });
        await this.router.navigate([ 'categorias' ]);
      });
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      name: [ null, [ Validators.required ] ],
      description: [ null, [ Validators.required ] ],
    });
  }

  submitForm() {
    const category = { ...this.categoryForm.value };
    if ( this.currentAction === 'new' ) {
      this.create(category);
    } else {
      this.update({ id: this.idCategory, ...category });
    }
  }

  private setCurrentAction(): void {
    const LAST_SEGMENT_URL = 0;
    let path = this.route.snapshot.url[LAST_SEGMENT_URL].path;
    if ( path === 'new' ) {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private loadCategory(): void {
    if ( this.currentAction === 'edit' ) {
      this.route.paramMap.pipe(
        map(param => +param.get('id')!),
        tap((idCategory: number) => this.idCategory = idCategory),
        switchMap(idCategory => this.service.findById(idCategory),
        ),
      ).subscribe(category => {
        this.categoryForm.patchValue(category);
      });
    }
  }

  private update(category: Category) {
    this.service.update(category).subscribe(async _ => {
      this.snackbarService.message({ message: `Categoria atualizada com sucesso` });
      await this.router.navigate([ 'categorias' ]);
    });
  }
}
