import { Component } from "@angular/core";
import { ProductSearchService } from "src/app/state/products-list/product-search.service";
import { Store } from "@ngrx/store";
import * as ProductListActions from "src/app/state/products-list/products-list.actions";

@Component({
  selector: "app-product-request-form",
  templateUrl: "./product-request-form.component.html",
  styleUrls: ["./product-request-form.component.scss"],
})
export class ProductRequestFormComponent {
  constructor(
    private productSearchService: ProductSearchService,
    private store: Store
  ) {}
  productName!: string;
  productUrl!: string;
  addedProductName!: string;
  showAddProduct: boolean = true;
  showAddProductSuccess: boolean = false;

  onSubmit() {
    const requestedProduct = {
      name: this.productName,
      productUrl: this.productUrl,
      status: "pending",
    };

    this.productSearchService.addProductRequest(requestedProduct).subscribe(
      () => {
        this.showAddProduct = false;
        this.showAddProductSuccess = true;
        this.addedProductName = requestedProduct.name;
      },
      (error) => console.error("error ", error)
    );

    this.productName = "";
    this.productUrl = "";
  }

  showRequestedProducts() {
    this.productSearchService.getRequestedProducts("").subscribe(
      (response) => {
        this.store.dispatch(
          ProductListActions.updateRequestedProducts({
            requestedProductsData: response,
          })
        );
        this.store.dispatch(
          ProductListActions.noRequestedProductsFound({
            requestedProductsNotFound: false,
          })
        );
      },
      (error) => console.error("error ", error)
    );
  }
}
