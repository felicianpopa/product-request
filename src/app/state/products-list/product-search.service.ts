import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductSearchService {
  private apiUrl = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  getProducts(products: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?name_like=${products}`);
  }

  getRequestedProducts(products: string): Observable<any> {
    const result = this.http.get(
      `${this.apiUrl}/requested-products?name_like=${products}`
    );

    return result;
  }
}
