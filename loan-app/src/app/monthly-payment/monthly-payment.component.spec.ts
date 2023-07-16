/*
======================================
; Title: monthly-payment.component.spec.ts
; Author: Chris Gorham
; Date: 12 July 2023
; Description: This code supports functionality for the Loan App
; Sources Used:
; WEB-425 Capstone Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyPaymentComponent } from './monthly-payment.component';

describe('MonthlyPaymentComponent', () => {
  let component: MonthlyPaymentComponent;
  let fixture: ComponentFixture<MonthlyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
