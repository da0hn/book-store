import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from '@book-store/views/book-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BookFormComponent } from '@book-store/views/book-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReadComponent } from './book-read/book-read.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookDeleteComponent,
    BookReadComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class BooksModule {
}
