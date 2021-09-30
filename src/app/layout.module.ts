import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { LayoutComponent } from './layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyWorkerService } from "./data/service/company-worker.service";
import { CompanySortComponent } from './company-sort/company-sort.component';
import { ReceiveCompaniesService } from "./data/service/receive-companies.service";
import { CompanyFilterComponent } from './company-filter/company-filter.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CompanyWorkerService, ReceiveCompaniesService],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
