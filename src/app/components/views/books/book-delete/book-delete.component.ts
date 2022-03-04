import { Component, OnInit } from '@angular/core';
import { Book } from '@book-store/views/books/shared';
import { BookService } from '@book-store/views/shared/book.service';
import { CurrentCategoryService, SnackService } from '@book-store/components/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: [ './book-delete.component.scss' ],
})
export class BookDeleteComponent implements OnInit {


  book!: Book;
  categoryName!: string;

  constructor(
    private service: BookService,
    private snackService: SnackService,
    private currentCategoryService: CurrentCategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.currentCategoryService.categoryName$.pipe(take(1)).subscribe(name => {
      this.categoryName = name;
    });
    this.route.paramMap.pipe(
      map(param => +param.get('id')!),
      switchMap(idBook => this.service.findById(idBook)),
    ).subscribe(book => this.book = book);
  }

  delete(): void {
    this.service.deleteById(this.book.id!)
      .pipe(take(1))
      .subscribe(async book => {
        this.snackService.message({ message: 'Livro deletado com sucesso' });
        await this.router.navigate([ 'categories', book.idCategory, 'books' ]);
      });
  }

  async cancel(): Promise<void> {
    await this.router.navigate([ 'categories', this.book.idCategory, 'books' ]);
  }
}
