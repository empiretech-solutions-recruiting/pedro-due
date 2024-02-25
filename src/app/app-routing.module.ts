import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./empire-tech/login/login.component";
import {RegisterComponent} from "./empire-tech/register/register.component";
import {ListingComponent} from "./empire-tech/listing/listing.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
