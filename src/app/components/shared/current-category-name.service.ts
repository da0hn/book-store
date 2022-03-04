import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentCategoryService {

  private readonly _categoryName$: ReplaySubject<string>;

  constructor() {
    this._categoryName$ = new ReplaySubject<string>(1);
  }

  get categoryName$(): Observable<string> {
    return this._categoryName$.asObservable();
  }

  emit(input: {name: string}): void {
    this._categoryName$.next(input.name);
  }
}
