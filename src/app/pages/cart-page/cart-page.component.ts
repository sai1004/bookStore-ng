import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"]
})
export class CartPageComponent implements OnInit {
  showItems: any[] = [];
  constructor(private _cartService: CartService) {
    this.showItems = _cartService.showCartItems();
  }

  remove(index: any) {
    console.log(index);
    this.showItems.splice(index, 1);
  }
  ngOnInit() {}
}
