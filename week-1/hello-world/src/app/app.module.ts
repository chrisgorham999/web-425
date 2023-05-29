/*
======================================
; Title: app.module.ts
; Author: Chris Gorham
; Date: 28 May 2023
; Description: This code supports functionality for the hello-world project
; Sources Used:
; Assignment 1.3 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
