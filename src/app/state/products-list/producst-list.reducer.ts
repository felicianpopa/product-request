import { createReducer, on } from "@ngrx/store";
import * as ProductsListActions from "./products-list.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState: any[] = [];

//productsListReducer will be imported in app.module.ts
export const productsListReducer = createReducer(
  initialState,
  on(
    // React on specific actions
    ProductsListActions.updateItems,
    (state, { productsListAction }) => productsListAction
    // productsListAction is the prop we pass from updateItems
  )
);

export const selectItemsState =
  createFeatureSelector<any[]>("productsListList");
export const selectProductsList = createSelector(
  selectItemsState,
  (state) => state
);
