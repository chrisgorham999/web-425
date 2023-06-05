/*
======================================
; Title: composer-details.component.ts
; Author: Chris Gorham
; Date: 05 June 2023
; Description: This code supports functionality for the composer-details component of the enhanced composer app
; Sources Used:
; Exercise 3.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

// defines where to look for the component's html and CSS
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
