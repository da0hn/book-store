import { Component, OnInit } from '@angular/core';
import { BookTableView } from '@book-store/views/books/shared';
import { BookService } from '@book-store/views/shared/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { CurrentCategoryService } from '@book-store/components/shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'title', 'read-book', 'actions' ];
  books: BookTableView[] = [];
  categoryName!: string;

  constructor(
    private service: BookService,
    private currentCategoryService: CurrentCategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.currentCategoryService.categoryName$
      .pipe(take(1))
      .subscribe((value: string) => this.categoryName = value);

    this.route.paramMap.pipe(
      take(1),
      map(param => +param.get('idCategory')!),
      switchMap((idCategory: number) => this.service.findAllByCategory(idCategory)),
    ).subscribe(books => this.books = books);
  }

  async navigateToDelete(book: BookTableView): Promise<void> {
    this.currentCategoryService.emit({ name: this.categoryName });
    await this.router.navigate([ book.id, 'delete' ], { relativeTo: this.route });
  }
}
