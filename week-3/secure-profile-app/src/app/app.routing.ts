/*
======================================
; Title: app.routing.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

// creates an array of route objects
export const AppRoutes: Routes = [

  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent},
]
