import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    return this._http.get('/api/products')
  }

  getProduct(id) {
    return this._http.get(`/api/products/${id}`);
  }

  addProduct(newProduct : any) {
    return this._http.post('/api/products', newProduct)
  }

  editProduct(editProduct : any) {
    return this._http.put(`/api/products/${ editProduct._id }`, editProduct)
  }

  deleteProduct(deleteProduct : any) {
    return this._http.delete(`/api/products/${ deleteProduct._id }`, deleteProduct)
  }
}
