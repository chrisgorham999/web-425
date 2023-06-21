/*
======================================
; Title: book.interface.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 1)
; Sources Used:
; Exercise 5.3 Instructions
;=====================================
*/

// imports
import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
