import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectItems } from "src/app/state/products-list/producst-list.reducer";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  productsList: Observable<any[]> = new Observable<any[]>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.productsList = this.store.pipe(select(selectItems));
  }
}
