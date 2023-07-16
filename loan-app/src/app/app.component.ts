/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 11 July 2023
; Description: This code supports functionality for the Loan App Project
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // creates the title string
    title: string;
    // sets the assignment variable to the current assignment
    constructor(){
      this.title = 'Welcome to Loan App!';
      }
}
