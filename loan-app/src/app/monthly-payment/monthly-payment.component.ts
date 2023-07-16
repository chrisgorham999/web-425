/*
======================================
; Title: monthly-payment.component.ts
; Author: Chris Gorham
; Date: 12 July 2023
; Description: This code supports functionality for the Loan App
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {
  // brings in the monthlyPayment variable so that it can be displayed in this component
  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
