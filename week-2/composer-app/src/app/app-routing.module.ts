/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date: 30 May 2023
; Description: This code supports functionality for the composer app
; Sources Used:
; Exercise 2.4 Instructions
;=====================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'composer-list', component: ComposerListComponent }, {path: 'contact', component: ContactComponent }, {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
