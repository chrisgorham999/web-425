/*
======================================
; Title: my-details.component.ts
; Author: Chris Gorham
; Date: 06 June 2023
; Description: This code supports functionality for the my-details component of the secure profile app
; Sources Used:
; Exercise 3.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// creates the Person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }
}

// defines the component selector, html source, and CSS source
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Chris Gorham", "Japanese Curry", "Black");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
