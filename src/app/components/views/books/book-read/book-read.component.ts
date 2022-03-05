import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '@book-store/views/books/shared';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: [ './book-read.component.scss' ],
})
export class BookReadComponent implements OnInit {
  book!: Book;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: BookService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(param => +param.get('id')!),
      switchMap(idBook => this.service.findById(idBook)),
    ).subscribe(book => this.book = book);
  }

  async return(): Promise<void> {
    await this.router.navigate([ 'categories', this.book.idCategory, 'books' ]);
  }
}
