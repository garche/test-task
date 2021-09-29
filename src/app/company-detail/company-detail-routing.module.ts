import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {CompanyDetailComponent} from "./company-detail.component";

const appRoutes: Routes = [{ path: '**', component: CompanyDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CompanyDetailRoutingModule{}
