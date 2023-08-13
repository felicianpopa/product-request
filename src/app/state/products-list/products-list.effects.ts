import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { ProductSearchService } from "./product-search.service";
import * as ProductListActions from "./products-list.actions";

@Injectable()
export class ProductsListEffects {
  constructor(
    private actions$: Actions,
    private productSearchService: ProductSearchService
  ) {}

  searchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.searchItems), // We are listening for actions of type ProductListActions.searchItems
      mergeMap((action) =>
        this.productSearchService
          .getProducts(action.searchTerm) // Get the producst lis from the server. action.searchTerm is defined in products-list.actions as a prop
          .pipe(
            map((productsListAction) =>
              ProductListActions.updateItems({ productsListAction })
            )
          )
      )
    )
  );
}
