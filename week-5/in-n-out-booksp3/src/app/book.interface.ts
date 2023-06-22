/*
======================================
; Title: book.interface.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 3)
; Sources Used:
; Assignment 5.4 Instructions
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
