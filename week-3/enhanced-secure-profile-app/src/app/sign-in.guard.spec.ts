/*
======================================
; Title: sign-in.guard.spec.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the enhanced secure profile app
; Sources Used:
; Assignment 3.4 Instructions
;=====================================
*/

// imports
import { TestBed } from '@angular/core/testing';
import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
