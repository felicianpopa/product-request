import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  productsListReducer,
  requestedProductsListReducer,
  requestedProductsFoundStatusReducer,
} from "./state/products-list/producst-list.reducer";
import { ProductsListEffects } from "./state/products-list/products-list.effects";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductRequestFormComponent } from "./components/product-request-form/product-request-form.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductsListComponent,
    ProductRequestFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      productsListList: productsListReducer,
      requestedProductsListList: requestedProductsListReducer,
      requestedProductsFoundStatus: requestedProductsFoundStatusReducer,
    }),
    EffectsModule.forRoot([ProductsListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
