/*
======================================
; Title: composer.interface.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the di composer app
; Sources Used:
; Exercise 4.2 Instructions
;=====================================
*/

//export IComposer so it can be used elsewhere
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
