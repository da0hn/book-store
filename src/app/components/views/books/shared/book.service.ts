import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Book, BookTableView } from '@book-store/views/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  findAllByCategory(idCategory: number): Observable<BookTableView[]> {
    return this.http.get<BookTableView[]>(`${this.baseUrl}/books?category=${idCategory}`);
  }

  findById(idCategory: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${idCategory}`);
  }

  save(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`, newBook);
  }

  deleteById(idBook: number): Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}/books/${idBook}`);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/books/${book.id}`, book);
  }

}
