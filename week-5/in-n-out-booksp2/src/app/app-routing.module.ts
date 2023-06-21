/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 1)
; Sources Used:
; Exercise 5.3 Instructions
;=====================================
*/

// imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';

// define routes and match to app components
const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'book-list', component: BookListComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// exports
export class AppRoutingModule { }
