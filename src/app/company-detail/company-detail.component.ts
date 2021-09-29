import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyInfo} from "../data/models/interfaces/company-info.interface";
import {CompanyService} from "../data/service/company.service";
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
    private _companyService: CompanyService
  ) { }

  public ngOnInit(): void {
    if (this._companyService.targetCompany.length > 0){
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
