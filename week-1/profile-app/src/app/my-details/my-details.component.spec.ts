/*
======================================
; Title: my-details.component.spec.ts
; Author: Chris Gorham
; Date: 28 May 2023
; Description: This code supports functionality for the my-details component of the profile picture app
; Sources Used:
; Assignment 1.5 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
