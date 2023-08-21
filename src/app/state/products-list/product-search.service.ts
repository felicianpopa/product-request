import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

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
    console.warn("getting requested products");
    const result = this.http.get(
      `${this.apiUrl}/requested-products?name_like=${products}`
    );

    return result;
  }

  addProductRequest(product: Object): Observable<Object> {
    console.warn("adding product ", product);
    return this.http.post<Object>(
      `${this.apiUrl}/requested-products`,
      product,
      httpOptions
    );
  }
}
