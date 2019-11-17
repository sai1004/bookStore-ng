import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BTechService {
  constructor() {}

  cartItems: any[] = [];

  getBooks() {
    return [
      {
        id: 1,
        bookname: "Microprocessors and Its Interfacing",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },

      {
        id: 2,
        bookname: "VLSI",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 3,
        bookname: "C",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 4,
        bookname: "PYTHON",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 5,
        bookname: "ICA",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 6,
        bookname: "DSP",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 7,
        bookname: "DIP",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 8,
        bookname: "RADAR",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 9,
        bookname: "AWP",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      },
      {
        id: 10,
        bookname: "CN",
        img: "../../../assets/mpmc.jpeg",
        branch: "ECE",
        Author: "vishweshwaraiah",
        price: 300,
        publisher: "SIA"
      }
    ];
  }

  getCartItems() {
    return this.cartItems;
  }

  saveToCart(itemFromBtech: any) {
    console.log(itemFromBtech);
    this.cartItems.push(itemFromBtech);
  }
}
