import { Component, OnInit } from '@angular/core';
import { BTechService } from '../../pages/b-tech-page/b-tech.service';

@Component({
  selector: 'app-b-tech-page',
  templateUrl: './b-tech-page.component.html',
  styleUrls: ['./b-tech-page.component.css']
})
export class BTechPageComponent implements OnInit {

  books: any[] = []

  constructor(private bookservice:BTechService ) {
    this.books = bookservice.getBooks()
    // this.books = this.getBooks()
   }



  ngOnInit() {
  }

}
