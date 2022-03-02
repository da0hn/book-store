import { Component, OnInit } from '@angular/core';
import { Book } from '@book-store/views/books/shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'title', 'read-book', 'actions' ];
  books: Book[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
