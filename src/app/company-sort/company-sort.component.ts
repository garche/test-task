import { Component } from '@angular/core';
import {CompanyWorkerService} from "../data/service/company-worker.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent {

  constructor(
    private _company: CompanyWorkerService
  ) {}

  public sortCompany(key: string){
    this._company.sortList(key);
  }
}


