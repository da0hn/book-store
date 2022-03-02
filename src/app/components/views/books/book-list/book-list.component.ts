import { Component, OnInit } from '@angular/core';
import { BookTableView } from '@book-store/views/books/shared';
import { BookService } from '@book-store/views/shared/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'title', 'read-book', 'actions' ];
  books: BookTableView[] = [];

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(param => +param.get('idCategory')!),
      switchMap((idCategory: number) => this.service.findAllByCategory(idCategory)),
    ).subscribe(books => this.books = books);
  }

}
