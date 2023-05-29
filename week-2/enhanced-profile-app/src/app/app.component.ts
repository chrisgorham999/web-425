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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isLoggedIn: Boolean = true;
assignment: string = "Exercise 2.3 - Data Binding";
}


