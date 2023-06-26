/*
======================================
; Title: not-found.component.spec.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the GPA Calculator App (Part 1)
; Sources Used:
; Exercise 6.3 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
