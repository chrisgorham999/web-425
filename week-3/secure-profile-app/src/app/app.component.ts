/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 29 May 2023
; Description: This code supports functionality for the profile picture app (part 2)
; Sources Used:
; Exercise 2.3 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
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
// sets the variable initial state; when false it will deny access to the content
isLoggedIn: Boolean = true;
// defines the assignment that will be displayed in the HTML
assignment: string = "Exercise 2.3 - Data Binding";
}


