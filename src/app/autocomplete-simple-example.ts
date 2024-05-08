import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})export class AutocompleteSimpleExample implements OnInit{
  myControl = new FormControl('1');
  options: string[] = ['One', 'Two', 'Three'];
  books$: Observable<Book[]>;
  books: Array<Book> = [
    { id: '1', title: 'USD' },
    { id: '2', title: 'AUD' },
    { id: '3', title: 'INR' },
    { id: '4', title: 'EUR' },
    { id: '5', title: 'GBP' },
  ];

  ngOnInit() {
    this.books$ = this.myControl.valueChanges.pipe(
      startWith(""),
      map((airport) =>
        airport ? this.filterbooks(airport) : this.books.slice()
      )
    );
  }
  getTitle(bookId: string) {
    return this.books.find((book) => book.id === bookId)?.title;
  }

  onSubmit() {
    console.log(this.myControl.value);
  }

  filterbooks(name: string) {
    return this.books.filter(
      (airport) =>
        airport.id.toLowerCase().indexOf(name.toLowerCase()) === 0 ||
        airport.title.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }
}

export class Book {
  id: string;
  title: string;
}
/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
