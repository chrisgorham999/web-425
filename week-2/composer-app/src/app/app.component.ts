/*
======================================
; Title: app-component.ts
; Author: Chris Gorham
; Date: 30 May 2023
; Description: This code supports functionality for the composer app
; Sources Used:
; Exercise 2.4 Instructions
;=====================================
*/

import { Component } from '@angular/core';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// the assignment variable displays the assignment in the html
export class AppComponent {
  assignment: string = "Composer App";
}
