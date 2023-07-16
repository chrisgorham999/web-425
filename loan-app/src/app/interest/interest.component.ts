/*
======================================
; Title: interest.component.ts
; Author: Chris Gorham
; Date: 12 July 2023
; Description: This code supports functionality for the Loan App
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  // brings in the interest variable so that it can be displayed in this component
  @Input() interest: number;

  constructor() { }

  ngOnInit(): void {
  }

}
