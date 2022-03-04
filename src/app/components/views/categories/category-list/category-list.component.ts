import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@book-store/views/categories/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentCategoryService } from '@book-store/components/shared';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './category-list.component.html',
  styleUrls: [ './category-list.component.scss' ],
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'description', 'books', 'actions' ];
  categories: Category[] = [];

  constructor(
    private currentCategoryName: CurrentCategoryService,
    private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
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

  async routeToBooks(category: Category): Promise<void> {
    this.currentCategoryName.emit({ name: category.name });
    await this.router.navigate([ category.id, 'books' ], { relativeTo: this.route });
  }
}
