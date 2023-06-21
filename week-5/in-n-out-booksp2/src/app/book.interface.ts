/*
======================================
; Title: book.interface.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 2)
; Sources Used:
; Exercise 5.3 Instructions
;=====================================
*/

// creates IBook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
