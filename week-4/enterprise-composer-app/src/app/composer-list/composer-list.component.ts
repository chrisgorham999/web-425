/*
======================================
; Title: composer-list.component.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the composer-list component of the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IComposer} from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  // updated in assignment 4.4 to be an observable
  composers: Observable<IComposer[]>;
  // added for the reactive composer app for the search by name form control
  txtSearchControl = new FormControl('');
  // for the di-composer-app this part is added to the constructor for the ComposerService
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    // creates the subscribe method that listens for valueChanges and calls the filterComposers function
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
