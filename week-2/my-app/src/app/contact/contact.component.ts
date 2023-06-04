/*
======================================
; Title: contact.component.ts
; Author: Chris Gorham
; Date: 29 May 2023
; Description: This code supports functionality for the Contact component in the my-app project
; Sources Used:
; Assignment 2.2 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines the component selector, html source, and CSS source
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
