/*
======================================
; Title: base-layout.component.ts
; Author: Chris Gorham
; Date: 03 July 2023
; Description: This code supports functionality for the GPA Calculator App(Part 3)
; Sources Used:
; Exercise 7.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
  // sets the assignment variable to the current assignment
  this.assignment = "Exercise 7.2 - Reactive Forms";
  }



  ngOnInit(): void {
  }

  // function for the user to sign out of the app
  signOut() {
    this.cookieService.deleteAll();
    // after deleting cookies this navigates the user back to the sign in page
    this.router.navigate(['/session/sign-in']);
  }

}
