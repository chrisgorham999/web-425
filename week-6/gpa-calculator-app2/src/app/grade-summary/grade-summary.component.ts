/*
======================================
; Title: grade-summary.component.ts
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
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
