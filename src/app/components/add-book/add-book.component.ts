import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import {  } from "../../date_adapter/AppDateAdapter";
// import { AppDateAdapter } from "../../adapter/AppDateAdapter";
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {
  author;
  title;
  price;
  dateadded;
  dateread;
  description;
  imageUrl;
  rate;

  isRead:boolean = false;
  // dateAdapter:AppDateAdapter = new AppDateAdapter();

  constructor(
    private booksService:BooksService,
    private router:Router) { }

  ngOnInit() {
    console.log(this.isRead)

  }

  updateDateAdded(dateAdded){
    // this.dateadded = this.dateAdapter.format(dateAdded,"input");
    this.dateadded = dateAdded;
  }

  updateDateRead(dateRead){
    // this.dateread = this.dateAdapter.format(dateRead,"input");
    this.dateread = dateRead;
    console.log(this.dateread);

    this.isRead = true;

  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log('Book - ',book);
    this.booksService.addBook(book);
    this.router.navigate(['books']);
  }


}
