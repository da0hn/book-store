import { Injectable } from '@angular/core';
import { Category } from './category.type';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${ this.baseUrl }/categories`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${ this.baseUrl }/categories`, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put(`${ this.baseUrl }/categories/${ category.id }`, category).pipe(map(() => category));
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${ this.baseUrl }/categories/${ id }`);
  }

  deleteById(id: number): Observable<Category> {
    return this.http.delete<Category>(`${ this.baseUrl }/categories/${ id }`);
  }
}
