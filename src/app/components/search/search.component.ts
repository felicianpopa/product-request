import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ProductListActions from "src/app/state/products-list/products-list.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  productSearchText!: string;

  constructor(private store: Store) {}

  onSubmit() {
    if (!this.productSearchText) {
      alert("pleas enter a text");
      return;
    }
    this.store.dispatch(
      ProductListActions.searchItems({ searchTerm: this.productSearchText })
    );
    this.productSearchText = "";
  }
}
