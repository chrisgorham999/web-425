/*
======================================
; Title: contact.component.ts
; Author: Chris Gorham
; Date: 30 May 2023
; Description: This code supports functionality for the contact component of the composer app
; Sources Used:
; Exercise 2.4 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
