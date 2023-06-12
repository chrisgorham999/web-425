/*
======================================
; Title: composer.service.spec.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the reactive composer app for exercise 4.3
; Sources Used:
; Exercise 4.3 Instructions
;=====================================
*/

// imports
import { TestBed } from '@angular/core/testing';
import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
