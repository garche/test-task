import { CompanyYandexMapComponent } from './company-yandex-map.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{ path: '**', component: CompanyYandexMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CompanyYandexMapRoutingModule {}
