import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyInfo} from "../data/models/interfaces/company-info.interface";
import {CompanyWorkerService} from "../data/service/company-worker.service";
import {filter, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  public company!: CompanyInfo;

  constructor(
    private _aRoute: ActivatedRoute,
    private _router: Router,
    private _companyService: CompanyWorkerService
  ) { }

  public ngOnInit(): void {
    console.log(this._aRoute.snapshot)
    if (this._companyService.companyList.length > 0){
      const companyId: number = parseInt(this._aRoute.snapshot.queryParams.id, 10);
      this.company = this._companyService.getCompany(companyId);
      console.log(this.company)
    }else{
      this._router.navigateByUrl('list').then(
        x => console.log('window was reload')
      )
    }
  }
}
