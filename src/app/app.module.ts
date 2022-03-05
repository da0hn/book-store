import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '@book-store/app-routing.module';
import { AppComponent } from '@book-store/app.component';
import { FooterComponent, HeaderComponent, NavComponent } from '@book-store/components/template';
import { InMemoryDatabase } from '@book-store/in-memory-database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
