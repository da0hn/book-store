import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { BookTableView } from '@book-store/views/books';

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

}
