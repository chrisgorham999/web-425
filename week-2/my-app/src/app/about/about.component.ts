/*
======================================
; Title: about.component.ts
; Author: Chris Gorham
; Date: 29 May 2023
; Description: This code supports functionality for the About component in the my-app project
; Sources Used:
; Assignment 2.2 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines the component selector, html source, and CSS source
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
