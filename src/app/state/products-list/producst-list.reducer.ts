import { createReducer, on } from "@ngrx/store";
import * as ProductsListActions from "./products-list.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState: any[] = [];
export const initialrequestedProductsFoundState: boolean = false;

//productsListReducer will be imported in app.module.ts
export const productsListReducer = createReducer(
  initialState,
  on(
    // React on specific actions
    ProductsListActions.updateItems,
    (state, { productsListData }) => productsListData
    // productsListData is the prop we pass from updateItems
  )
);

export const selectItemsState =
  createFeatureSelector<any[]>("productsListList");
export const selectProductsList = createSelector(
  selectItemsState,
  (state) => state
);

export const requestedProductsListReducer = createReducer(
  initialState,
  on(
    // React on specific actions
    ProductsListActions.updateRequestedProducts,
    (state, { requestedProductsData }) => requestedProductsData
  )
);

export const requestedProductsState = createFeatureSelector<any[]>(
  "requestedProductsListList"
);
export const requestedProductsList = createSelector(
  requestedProductsState,
  (state) => state
);

// Requested products found
export const requestedProductsFoundStatusReducer = createReducer(
  initialrequestedProductsFoundState,
  on(
    // React on specific actions
    ProductsListActions.noRequestedProductsFound,
    (state, { requestedProductsNotFound }) => requestedProductsNotFound
  )
);

export const requestedProductsFoundStatusState = createFeatureSelector<boolean>(
  "requestedProductsFoundStatus"
);
export const requestedProductsFoundStatus = createSelector(
  requestedProductsFoundStatusState,
  (state) => state
);
