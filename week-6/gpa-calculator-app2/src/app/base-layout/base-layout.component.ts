/*
======================================
; Title: base-layout.component.css
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the GPA Calculator App (Part 2)
; Sources Used:
; Assignment 6.4 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
   }

  ngOnInit(): void {
  }

}
