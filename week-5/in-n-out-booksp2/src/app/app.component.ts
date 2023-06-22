/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 2)
; Sources Used:
; Exercise 5.3 Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

// defines selector, html, and css locations
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exports
export class AppComponent {
 assignment: string;

 constructor() {
  this.assignment = "Exercise 5.3 - Data Tables";
 }
}
