import { Injectable } from '@angular/core';
import {CompanyWorkerService} from "./company-worker.service";
import {ajax} from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReceiveCompaniesService {

  constructor(
    private _company: CompanyWorkerService
  ){}

  public initList() {
    const companyStorage$ = ajax.getJSON('https://random-data-api.com/api/company/random_company?size=100')
      .pipe(
        //@ts-ignore
        mergeMap(items => items),
      ).subscribe(
        x => this._company.companyList.push(x)
      )
  }
}
