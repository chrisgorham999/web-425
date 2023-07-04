/*
======================================
; Title: sign-in.component.ts
; Author: Chris Gorham
; Date: 03 July 2023
; Description: This code supports functionality for the GPA Calculator App(Part 3)
; Sources Used:
; Exercise 7.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  // the function for when the user clicks the submit button on the form
  onSubmit() {
    const formValues = this.signinForm.value;
    // parses the student ID to an integer value from the form values
    const studentId = parseInt(formValues.studentId);

    // if statement to set the cookie and routes to home screen or if the studentId isn't valid it shows the error message
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID that you entered is invalid, please try again.';
    }
  }

}
