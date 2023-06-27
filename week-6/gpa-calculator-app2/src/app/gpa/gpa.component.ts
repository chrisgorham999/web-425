/*
======================================
; Title: gpa.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the GPA Calculator App (Part 2)
; Sources Used:
; Assignment 6.4 Instructions
;=====================================
*/

// imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
