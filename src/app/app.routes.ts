import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./products/products.component";

export const routes: Routes = [
  { path: "products", component: ProductsComponent},
  { path: "", component: AppComponent},
  { path: "**", redirectTo: '', pathMatch: "full"},
];
