/*
======================================
; Title: sign-in.service.ts
; Author: Chris Gorham
; Date: 03 July 2023
; Description: This code supports functionality for the GPA Calculator App(Part 3)
; Sources Used:
; Exercise 7.2 Instructions
;=====================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
