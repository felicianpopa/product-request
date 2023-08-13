import { Component } from "@angular/core";
import { ProductSearchService } from "src/app/services/product-search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  productSearchText!: string;
  productsList!: any[];

  constructor(private productSearchService: ProductSearchService) {}

  onSubmit() {
    if (!this.productSearchText) {
      alert("pleas enter a text");
      return;
    }
    this.productSearchService
      .getProducts(this.productSearchText)
      .subscribe((products) => {
        this.productsList = products;
        console.warn("products ", this.productsList);
      });
  }
}
