import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import 'rxjs/Add/operator/map'
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookList : AngularFireList<any>;
  bookDetail ;

  constructor(private afDB : AngularFireDatabase) { }

  getBooks(){
    this.bookList = this.afDB.list('books');
    return this.bookList.snapshotChanges();
  }

  //  getFavoriteBooks(){
  //   // this.favoriteBooks = this.afDB.list('books').pipe(
  //   //   map(books => { const topBooks = books.filter(item => item.rate >4);  return topBooks; }) 
  //   //   );

  //  }

  getBookDetails(id){
    this.bookDetail = this.afDB.object('/books/'+id);
    return this.bookDetail.snapshotChanges();
  } 

}
