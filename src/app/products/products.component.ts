import { Component } from '@angular/core';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  myproducts!: any[];

  constructor() {
    this.myproducts = TopBarComponent.prducts || [];
  }

  addToCart(i: number) {
    sessionStorage.setItem('item' + i, this.myproducts[i].toString());
  }
}
