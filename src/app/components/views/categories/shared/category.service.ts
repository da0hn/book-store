import { Injectable } from '@angular/core';
import { Category } from './category.type';
import { Observable } from 'rxjs';
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


}
