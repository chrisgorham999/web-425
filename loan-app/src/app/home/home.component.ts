/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date: 12 July 2023
; Description: This code supports functionality for the Loan App
; Sources Used:
; WEB-425 Capstone Instructions
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// establish the errorMessage variable
errorMessage: string;
// setup variables for the Form Group
loanDetailsForm: FormGroup;
// setting loan variables to 0 so it doesn't show null by default on the page
monthlyPayment: number = 0;
interest: number = 0;

  constructor(private fb: FormBuilder) {
  }

  // validators added so that the calculate button can't be pressed unless the fields are filled out and it also validates that numeric values are entered or else an error message is shown; both loanAmount and interestRate also allow for a "." to be added without an error
  ngOnInit(): void {
    this.loanDetailsForm = this.fb.group({
      loanAmount: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      interestRate: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      numOfYears: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
    })
  }

  get form() { return this.loanDetailsForm.controls; }

  // function that will calculate loan details
  calculateResults() {
    // pulls form data
    let formDetails = this.loanDetailsForm.value;
    let loanAmount = parseFloat(formDetails.loanAmount);
    let interestRate = parseFloat(formDetails.interestRate);
    let numOfYears = parseFloat(formDetails.numOfYears);

    // defined variables
    let months = (numOfYears * 12);
    let ratePerPeriod = ((interestRate / 100) / 12);

    // the actual calculation using the defined variables and the code provided in the instructions
    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) / (Math.pow((1 + ratePerPeriod), months) - 1);
    this.interest = (this.monthlyPayment * months) - loanAmount;
  }

    // This function resets all the entries to blank
    resetEntries() {
      this.monthlyPayment = 0;
      this.interest = 0;
      this.loanDetailsForm.reset();
    }
  }


