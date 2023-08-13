import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectProductsList } from "src/app/state/products-list/producst-list.reducer";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  productsListList: Observable<any[]> = new Observable<any[]>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    // We access the Store pipe to get the required value
    this.productsListList = this.store.pipe(select(selectProductsList));
  }
}
