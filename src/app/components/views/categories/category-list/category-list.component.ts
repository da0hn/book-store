import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './category-list.component.html',
  styleUrls: [ './category-list.component.scss' ],
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'description', 'actions' ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
