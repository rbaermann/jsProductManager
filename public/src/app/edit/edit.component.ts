import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct : any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editProduct = {};
    this._route.params.subscribe((params: Params) => {
      this._httpService.getProduct(params["id"]).subscribe((product) => {
        this.editProduct = product;
      })
    })
  }

  goHome() {
    this._router.navigate(['/products']);
  }

  onEdit() {
    let obs = this._httpService.editProduct(this.editProduct);
    obs.subscribe(data => {
      console.log("Updated selected data", data);
      this.editProduct = {};
    })
    this.goHome();
  }

  onDelete(product : any) {
    let obs = this._httpService.deleteProduct(product);
    obs.subscribe(data => {
      console.log("Deleted selected product", data);
    })
    this.goHome()
  }
}