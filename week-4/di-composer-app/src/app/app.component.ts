/*
======================================
; Title: app-component.ts
; Author: Chris Gorham
; Date: 05 June 2023
; Description: This code supports functionality for the enhanced composer app for exercise 3.2
; Sources Used:
; Exercise 3.2 Instructions
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
