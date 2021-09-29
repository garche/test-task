import { Component } from '@angular/core';
import {CompanyService} from "../data/service/company.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent {

  constructor(
    private _company: CompanyService
  ) {}

  public sortCompany(key: string){
    this._company.sortList(key);
  }
}


