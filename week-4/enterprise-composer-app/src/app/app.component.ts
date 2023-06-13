/*
======================================
; Title: app-component.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the reactive composer app for exercise 4.3
; Sources Used:
; Exercise 4.3 Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// the assignment variable displays the assignment in the html
export class AppComponent {
  assignment: string = "Exercise 3.2 - Passing Data to Routes, Part 1";
}
