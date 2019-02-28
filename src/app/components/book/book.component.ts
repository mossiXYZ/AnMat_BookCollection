import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 // bookObj: any;
id:any;
title : any;
author;
dateadded;
deteread;
price;
rate;
description;
imageUrl;
  constructor(
      private booksService: BooksService,
      private router : Router,
      private route : ActivatedRoute
      ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.booksService.getBookDetails(this.id).subscribe(
      book => {
         //console.log('book details:' +JSON.stringify(book));
        
        let obj = book.payload.val();
        
        this.title=obj.title;
        this.author=obj.author;
        this.dateadded=obj.dateadded;
        this.deteread=obj.deteread;
        this.price=obj.price;
        this.rate=obj.rate;
        this.description=obj.description;
        this.imageUrl=obj.imageUrl;
      });

  }


}
