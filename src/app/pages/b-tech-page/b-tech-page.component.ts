import { Component, OnInit } from "@angular/core";
import { BTechService } from "../../pages/b-tech-page/b-tech.service";

@Component({
  selector: "app-b-tech-page",
  templateUrl: "./b-tech-page.component.html",
  styleUrls: ["./b-tech-page.component.css"]
})
export class BTechPageComponent implements OnInit {
  books: any[] = [];

  constructor(private _bookservice: BTechService) {
    this.books = _bookservice.getBooks();
    // this.books = this.getBooks()
  }

  addToCart(item) {
    this._bookservice.saveToCart(item);
  }

  ngOnInit() {}
}
