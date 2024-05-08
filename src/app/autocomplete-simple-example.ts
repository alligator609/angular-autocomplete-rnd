import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})
export class AutocompleteSimpleExample {
  myControl = new FormControl('1');
  options: string[] = ['One', 'Two', 'Three'];
  books: Array<{ id: string; title: string }> = [
    { id: '1', title: 'USD' },
    { id: '2', title: 'AUD' },
    { id: '3', title: 'INR' },
    { id: '4', title: 'EUR' },
    { id: '5', title: 'GBP' },
  ];

  getTitle(bookId: string) {
    return this.books.find((book) => book.id === bookId).title;
  }

  onSubmit() {
    console.log(this.myControl.value);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
