/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 29 May 2023
; Description: This code supports functionality for the my-app project
; Sources Used:
; Assignment 2.2 Instructions
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
  title = 'my-app';
}
