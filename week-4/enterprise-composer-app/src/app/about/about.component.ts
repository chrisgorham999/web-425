/*
======================================
; Title: about.component.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the about component of the reactive composer app
; Sources Used:
; Exercise 4.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines where to look for the component's html and CSS
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
