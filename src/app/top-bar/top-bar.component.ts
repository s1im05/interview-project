import {Component, inject} from '@angular/core';
import {MyHttpService} from "../my-http.service";
import {HttpClientModule} from "@angular/common/http";

enum EnumProductType {
  default,
  onSale,
  outOfStock
}

interface Products {
  id: number;
  title?: string;
  type?: EnumProductType;
}

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  static prducts: Products[];
  service = inject(MyHttpService);

  constructor() {
    this.getProducts();
  }

  getProducts() {
    TopBarComponent.prducts = this.service.loadProducts() as any;
  }
}
