import { Component, OnInit } from '@angular/core';
import {CompanyInfo} from "../data/models/interfaces/company-info.interface";
import {CompanyWorkerService} from "../data/service/company-worker.service";
import {tap} from "rxjs/operators";
import {ReceiveCompaniesService} from "../data/service/receive-companies.service";
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public allCompany: CompanyInfo[] = [];

  constructor(
    private _company: CompanyWorkerService,
    private _receive: ReceiveCompaniesService
  ) {
  }

  public ngOnInit(): void {
    this._receive.initList()
    this._company.proxyTargetCompany.pipe(
      tap((value:CompanyInfo[])=>{
        this.allCompany = value
      })
    ).subscribe()
    setTimeout(() => this._company.getFilterSheets(), 5000)
  }
}
