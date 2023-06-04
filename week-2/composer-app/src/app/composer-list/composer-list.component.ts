/*
======================================
; Title: composer-list.component.ts
; Author: Chris Gorham
; Date: 30 May 2023
; Description: This code supports functionality for the composer-list component of the composer app
; Sources Used:
; Exercise 2.4 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// creates the Composer class
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  // creates a list of composers
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Pyotr Tchaikovsky", "Classical"),
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Richard Wagner", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
