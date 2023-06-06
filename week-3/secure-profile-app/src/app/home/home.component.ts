/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the  home component in the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// defines the selector and where to look for the html and css for the component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // creates the variable
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
