import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, switchMap } from "rxjs";
import { ProductSearchService } from "./product-search.service";
import * as ProductListActions from "./products-list.actions";
import { of } from "rxjs"; // Import the 'of' operator

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
        this.productSearchService.getProducts(action.searchTerm).pipe(
          switchMap((productsListData) => {
            if (productsListData.length === 0) {
              return this.productSearchService
                .getRequestedProducts(action.searchTerm)
                .pipe(
                  map((requestedProductsData) =>
                    ProductListActions.updateRequestedProducts({
                      requestedProductsData,
                    })
                  )
                );
            } else {
              return of(ProductListActions.updateItems({ productsListData }));
            }
          })
        )
      )
    )
  );
}
