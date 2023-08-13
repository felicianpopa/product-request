import { createAction, props } from "@ngrx/store";

// This is the action we call in search.component.ts onSubmit
export const searchItems = createAction(
  "[productsListActionName] Search Items",
  props<{ searchTerm: string }>()
);

// This is called by product-list.effects because it is piped to searchItems
// Product-list.reducers is listening to the updateItems and will update the productsListAction
export const updateItems = createAction(
  "[productsListActionName] Update Items",
  props<{ productsListAction: any[] }>()
);
