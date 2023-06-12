/*
======================================
; Title: composer-list.component.ts
; Author: Chris Gorham
; Date: 05 June 2023
; Description: This code supports functionality for the composer-list component of the enhanced composer app
; Sources Used:
; Exercise 3.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { Composer } from '../composer.class';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
