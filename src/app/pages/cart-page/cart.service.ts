import { Injectable } from "@angular/core";
import { BTechService } from "../b-tech-page/b-tech.service";

@Injectable({
  providedIn: "root"
})
export class CartService {

  savedCartItems: any[] = [];

  constructor(private _productService: BTechService) {
    this.savedCartItems = _productService.getCartItems();
  }

  showCartItems(){
    return this.savedCartItems;
  }
}
