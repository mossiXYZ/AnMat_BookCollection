import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
//https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md
//AngularFire 5.0 is a refactor of the AngularFireDatabase module.
// It removes the FirebaseListObservable and FirebaseObjectObservable in favor of a generic based service API.
interface Book {
  author: string,
  dateadded: string,
  dateread: string,
  description: string,
  imageUrl: string,
  price: string,
  rate: string,
  title: string
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {


  allBooks: any[];

  constructor(private bookService : BooksService) { 
  }


  ngOnInit() {
    this.bookService.getBooks().subscribe(
       
      listOfBooks => { 
        let array  = listOfBooks.map(item => {
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });
        //console.log(array);
        this.allBooks = array;
      });
  }

}
