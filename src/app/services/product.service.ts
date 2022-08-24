import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from 'src/types';
// @Injectable({
//   providedIn: 'root', // alternative way to register a service globally
// })
@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProducts() {
    const url =
      'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.httpClient.get<ProductType[]>(url);
  }
  doCheckout(data: any) {
    const url = 'https://my-app-2675f-default-rtdb.firebaseio.com/b6-data.json';
    return this.httpClient.post(url, data);
  }
}
