import { createReducer, on } from "@ngrx/store";
import * as ProductsListActions from "./products-list.actions";

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialState: any[] = [];

export const productsListReducer = createReducer(
  initialState,
  on(ProductsListActions.updateItems, (state, { productsList }) => productsList)
);

export const selectItemsState = createFeatureSelector<any[]>("productsList");
export const selectItems = createSelector(selectItemsState, (state) => state);
