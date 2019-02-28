import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteBooks: any[];
  unReadBooks: any[];
  constructor(private bookService : BooksService) { }

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
        this.favoriteBooks = array.filter(item => item.rate >4);
        this.unReadBooks = array.filter(item => item.dateread  == null);

      });
  }

}
