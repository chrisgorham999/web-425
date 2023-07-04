/*
======================================
; Title: sign-in.service.spec.ts
; Author: Chris Gorham
; Date: 03 July 2023
; Description: This code supports functionality for the GPA Calculator App(Part 3)
; Sources Used:
; Exercise 7.2 Instructions
;=====================================
*/

// imports
import { TestBed } from '@angular/core/testing';
import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
