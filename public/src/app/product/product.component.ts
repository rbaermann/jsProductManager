import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let obs = this._httpService.getProducts();
    obs.subscribe(data => {
      console.log("Got our data!", data);
      this.products = data["Product"];
    })
  }

  onDelete(product : any) {
    let obs = this._httpService.deleteProduct(product);
    obs.subscribe(data => {
      console.log("Deleted selected product", data);
      this.getProductsFromService();
    })
  }

}
