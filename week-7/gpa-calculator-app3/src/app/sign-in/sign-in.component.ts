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
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // signinForm is the form group that will be referenced in the html form in the sign-in.component.html code
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  // when the submit button is clicked this function happens
  onSubmit() {
    // how we capture the values from the form
    const formValues = this.signinForm.value;
    // parses the student id from the form values
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      // routes back to home screen
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again';
    }
  }
}
