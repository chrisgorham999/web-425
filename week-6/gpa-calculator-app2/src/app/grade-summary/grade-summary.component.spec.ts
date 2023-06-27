/*
======================================
; Title: grade-summary.component.spec.ts
; Author: Chris Gorham
; Date: 27 June 2023
; Description: This code supports functionality for the GPA Calculator App(Part 2)
; Sources Used:
; Assignment 6.4 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
