/*
======================================
; Title: composer.service.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the enterprise composer app for assignment 4.4
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

// creates the Composer Service class
export class ComposerService {

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
  // function that returns all composers; updated with the observable in assignment 4.4
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // function that returns a specific composer based on composerId
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1 )))
      }
  }

