import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@book-store/views/categories/shared';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './category-list.component.html',
  styleUrls: [ './category-list.component.scss' ],
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'description', 'books', 'actions' ];
  categories: Category[] = [];

  constructor(private service: CategoryService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll()
      .subscribe(response => {
        this.categories = response;
      });
  }

}
