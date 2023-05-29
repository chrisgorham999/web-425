/*
======================================
; Title: my-image.component.ts
; Author: Chris Gorham
; Date: 28 May 2023
; Description: This code supports functionality for the my-image component of the profile picture app
; Sources Used:
; Assignment 1.5 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
