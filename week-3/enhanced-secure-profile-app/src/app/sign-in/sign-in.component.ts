/*
======================================
; Title: sign-in.component.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the  sign-in component in the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// defines the selector and where to look for the html and css for the component
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  // set the variable to false to start
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // the sign in function
  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
