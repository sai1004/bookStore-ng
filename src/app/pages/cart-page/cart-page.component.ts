import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"]
})
export class CartPageComponent implements OnInit {
  showItems: any[] = [];
  animal: string;
  name: string;
  constructor(private _cartService: CartService,public dialog: MatDialog) {
    this.showItems = _cartService.showCartItems();
  }

  remove(index: any) {
    console.log(index);
    this.showItems.splice(index, 1);
  }
  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}
