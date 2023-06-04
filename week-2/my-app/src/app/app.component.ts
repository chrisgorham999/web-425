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

// imports
import { Component } from '@angular/core';

// defines the component selector, html source, and CSS source
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
