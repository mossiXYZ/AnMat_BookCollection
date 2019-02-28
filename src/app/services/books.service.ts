import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookList : AngularFireList<any>;

  constructor(private afDB : AngularFireDatabase) { }

  getBooks(){
    this.bookList = this.afDB.list('books');
    return this.bookList.snapshotChanges();
 }
}
