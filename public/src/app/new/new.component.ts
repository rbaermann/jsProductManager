
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct : any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.newProduct = { name : "" };
    this._route.params.subscribe((params : Params) => {
      console.log(params['id'])
    })
  }

  goHome() {
    this._router.navigate(['/products']);
  }

  onSubmit() {
    let obs = this._httpService.addProduct(this.newProduct);
    obs.subscribe(data => {
      console.log("Got data from post back", data);
      this.newProduct = { name : "" };
    })
    this.goHome()
  }
}
