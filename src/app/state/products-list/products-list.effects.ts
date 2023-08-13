import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { ProductSearchService } from "src/app/services/product-search.service";
import * as ProductListActions from "./products-list.actions";

@Injectable()
export class ProductsListEffects {
  constructor(
    private actions$: Actions,
    private productSearchService: ProductSearchService
  ) {}

  searchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.searchItems),
      mergeMap((action) =>
        this.productSearchService
          .getProducts(action.searchTerm)
          .pipe(
            map((productsList) =>
              ProductListActions.updateItems({ productsList })
            )
          )
      )
    )
  );
}
