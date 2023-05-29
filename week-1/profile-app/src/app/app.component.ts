/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 28 May 2023
; Description: This code supports functionality for the profile picture project
; Sources Used:
; Assignment 1.5 Instructions
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
  assignment: string = 'Assignment 1.5 - Components';
}
