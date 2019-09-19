import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path : 'products', component : ProductComponent },
  { path : 'products', children : [
    { path : 'edit/:id', component : EditComponent }, 
    { path : 'new', component : NewComponent },
  ]},
  { path : '', component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
