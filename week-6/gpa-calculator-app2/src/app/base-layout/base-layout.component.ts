/*
======================================
; Title: base-layout.component.css
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the GPA Calculator App (Part 1)
; Sources Used:
; Exercise 6.3 Instructions
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
    // sets the assignment variable to the current assignment
    this.assignment = 'Exercise 6.3 - Layouts';
   }

  ngOnInit(): void {
  }

}
