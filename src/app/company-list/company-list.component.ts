import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {CompanyInfo} from "../data/models/interfaces/company-info.interface";
import {CompanyService} from "../data/service/company.service";
import {tap} from "rxjs/operators";
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public allCompany: CompanyInfo[] = [];

  constructor(
    private _company: CompanyService
  ) {
  }

  public ngOnInit(): void {
    this._company.proxyTargetCompany.pipe(
      tap((value:CompanyInfo[])=>{
        this.allCompany = value
      })
    ).subscribe()
  }
}
