/*
======================================
; Title: my-image.component.spec.ts
; Author: Chris Gorham
; Date: 28 May 2023
; Description: This code supports functionality for the my-image component of the profile picture app
; Sources Used:
; Assignment 1.5 Instructions
; Angular CLI Hello World YouTube Video (https://youtu.be/XRm0SnUJROU)
;=====================================
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
