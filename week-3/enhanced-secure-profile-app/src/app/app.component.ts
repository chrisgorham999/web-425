/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

// defines the component selector, html source, and CSS source
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//exports
export class AppComponent {
  title = "Secure Profile App";
}


