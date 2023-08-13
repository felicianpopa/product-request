import { createAction, props } from "@ngrx/store";

export const updateItems = createAction(
  "[productsList] Update Items",
  props<{ productsList: any[] }>()
);
export const searchItems = createAction(
  "[productsList] Search Items",
  props<{ searchTerm: string }>()
);
