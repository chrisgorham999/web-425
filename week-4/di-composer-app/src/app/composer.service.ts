/*
======================================
; Title: composer.service.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the di composer app for exercise 4.2
; Sources Used:
; Exercise 4.2 Instructions
;=====================================
*/

// imports
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

// creates the Composer class
export class Composer {

  composers: Array<IComposer>;

  constructor() {
    // creates the list of composers
    this.composers = [
      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Pyotr Tchaikovsky", genre: "Classical"},
      {composerId: 103, fullName: "Antonio Vivaldi", genre: "Classical"},
      {composerId: 104, fullName: "Richard Wagner", genre: "Classical"}
    ]
  }
  // function that returns all composers
  getComposers() {
    return this.composers;
  }

  // function that returns a specific composer based on composerId
  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  constructor() { }
}
