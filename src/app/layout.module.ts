import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { LayoutRoutingModule } from "./layout-routing.module";
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyService} from "./data/service/company.service";
import { CompanySortComponent } from './company-sort/company-sort.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
    CompanySortComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule
  ],
  providers: [CompanyService],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
