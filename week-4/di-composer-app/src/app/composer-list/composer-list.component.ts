/*
======================================
; Title: composer-list.component.ts
; Author: Chris Gorham
; Date: 12 June 2023
; Description: This code supports functionality for the composer-list component of the di composer app
; Sources Used:
; Exercise 4.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService } from '../composer.service';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  // for the di-composer-app this part is added to the constructor for the ComposerService
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
