/*
======================================
; Title: book-list.component.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 1)
; Sources Used:
; Assignment 5.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// sets the component selector, html, and css locations
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
// exports
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
