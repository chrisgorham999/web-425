/*
======================================
; Title: book-list.component.ts
; Author: Chris Gorham
; Date: 21 June 2023
; Description: This code supports functionality for the In-N-Out Books Project (Part 2)
; Sources Used:
; Exercise 5.3 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

// sets the component selector, html, and css locations
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
// exports
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }
  // show details function that retrieves the details for one book based on isbn input from the user
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
