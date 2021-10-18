import { Injectable } from '@angular/core';
import {ICompanyInfo} from "../models/interfaces/company-info.interface";
import {BehaviorSubject} from "rxjs";
import {ReceiveCompaniesService} from "./receive-companies.service";

@Injectable()
export class CompanyWorkerService {

  public industryList: Set<string> = new Set<string>()
  public typeList: Set<string> = new Set<string>()
  public resultList: ICompanyInfo[] = [];
  public companyList: ICompanyInfo[] = [];
  public actualityIndustry: ICompanyInfo[] = [];
  public actualityName: ICompanyInfo[] = [];
  public actualityType: ICompanyInfo[] = [];
  public proxyTargetCompany: BehaviorSubject<ICompanyInfo[]> = new BehaviorSubject<ICompanyInfo[]>([])

  constructor(
    private _receive: ReceiveCompaniesService
  ){
    this._receive.initList().subscribe(
      // @ts-ignore
      (x: ICompanyInfo[]) => this.initialise(x)
    )
  }

  public getCompany(key: number): ICompanyInfo{
    return this.resultList.find((x) => x.id === key)!;
  }

  public getFilterSheets(){
    for(let company of this.companyList) {
      this.industryList.add(company.industry)
      this.typeList.add(company.type)
    }
  }

  public sortList(key:string){
    if(key === 'business_name'){
      this.resultList = this.resultList.sort((x,y) => {
        if(x.business_name > y.business_name) return 1;
        else if(x.business_name < y.business_name) return -1;
        else return 0;
      })
    }
    if(key === 'industry'){
      this.resultList = this.resultList.sort((x,y) => {
        if(x.industry > y.industry) return 1;
        else if(x.industry < y.industry) return -1;
        else return 0;
      })
    }
    if(key === 'type'){
      this.resultList = this.resultList.sort((x,y) => {
        if(x.type > y.type) return 1;
        else if(x.type < y.type) return -1;
        else return 0;
      })
    }
    this.proxyTargetCompany.next(this.resultList);
  }

  public searchByName(key: string){
    this.actualityName = []
    const bufferList: ICompanyInfo[] = this.actualityIndustry.filter(x => this.actualityType.includes(x))
    for(let company of this.companyList){
      if(company.business_name.toLowerCase().indexOf(key.toLowerCase()) === 0){
        this.actualityName.push(company)
      }
    }
    this.resultList = bufferList.filter(x => this.actualityName.includes(x))
    this.proxyTargetCompany.next(this.resultList)
  }

  public searchByIndustry(key: string){
    const bufferList: ICompanyInfo[] = this.actualityType.filter(x => this.actualityName.includes(x))
    if(key !==''){
      this.actualityIndustry = [];
      for(let company of this.companyList){
        if(company.industry == key){
          this.actualityIndustry.push(company)
        }
      }
    }
    else {
      this.actualityIndustry = this.companyList;
    }
    this.resultList = bufferList.filter(x => this.actualityIndustry.includes(x))
    this.proxyTargetCompany.next(this.resultList)
  }

  public searchByType(key: string){
    const bufferList: ICompanyInfo[] = this.actualityName.filter(x => this.actualityIndustry.includes(x))
    if(key !== '') {
      this.actualityType = [];
      for (let company of this.companyList) {
        if (company.type == key) {
          this.actualityType.push(company)
        }
      }
    }
    else {
      this.actualityType = this.companyList
    }
    this.resultList = bufferList.filter(x => this.actualityType.includes(x))
    this.proxyTargetCompany.next(this.resultList)
  }

  private initialise(companyList: ICompanyInfo[]){
    this.companyList = companyList
    this.proxyTargetCompany.next(companyList);
    this.resultList = companyList;
    this.actualityIndustry = companyList;
    this.actualityType = companyList;
    this.actualityName = companyList;
    this.getFilterSheets()
  }
}



