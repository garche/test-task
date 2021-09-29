import { Injectable } from '@angular/core';
import { ajax } from "rxjs/ajax";
import {CompanyInfo} from "../models/interfaces/company-info.interface";
import { mergeMap } from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CompanyService {

  public companyList: CompanyInfo[] = [];
  public targetCompany!: CompanyInfo[];
  public proxyTargetCompany: BehaviorSubject<CompanyInfo[]> = new BehaviorSubject<CompanyInfo[]>([])

  public companyStorage$ = ajax.getJSON('https://random-data-api.com/api/company/random_company?size=100')
    .pipe(
      //@ts-ignore
      mergeMap(items => items),
    ).subscribe(
      x => this.companyList.push(x)
    )
  constructor(){
    this.targetCompany = this.companyList
    this.proxyTargetCompany.next(this.targetCompany)
  }

  public getCompany(key: number): CompanyInfo{
    return this.targetCompany.find((x) => x.id === key)!;
  }

  public sortList(key:string){
    if(key === 'business_name'){
      this.targetCompany = this.targetCompany.sort((x,y) => {
        if(x.business_name > y.business_name) return 1;
        else if(x.business_name < y.business_name) return -1;
        else return 0;
      })
    }
    if(key === 'industry'){
      this.targetCompany = this.targetCompany.sort((x,y) => {
        if(x.industry > y.industry) return 1;
        else if(x.industry < y.industry) return -1;
        else return 0;
      })
    }
    if(key === 'type'){
      this.targetCompany = this.targetCompany.sort((x,y) => {
        if(x.type > y.type) return 1;
        else if(x.type < y.type) return -1;
        else return 0;
      })
    }
    this.proxyTargetCompany.next(this.targetCompany);
    }
  }



