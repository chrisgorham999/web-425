/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date: 03 July 2023
; Description: This code supports functionality for the GPA Calculator App(Part 2)
; Sources Used:
; Assignment 6.4 Instructions
;=====================================
*/

// imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInGuard } from './sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';

// routes and paths
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '',
      component: HomeComponent}
    ],
    canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: 'sign-in', component: SignInComponent}
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
