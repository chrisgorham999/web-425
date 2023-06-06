/*
======================================
; Title: my-image.component.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the my-image component of the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines the component selector, html source, and CSS source
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

// exports
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
