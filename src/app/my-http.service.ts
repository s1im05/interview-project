import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {

  constructor(public http: HttpClient) { }

  loadProducts() {
    return this.http.get('?products=all').pipe(map(
      () => [
        { id: 1, title: 'product 1', price: 100},
        { id: 2, title: 'product 2', price: 50},
        { id: 3, title: 'product 3', price: 150},
      ]
    ));
  }
}
