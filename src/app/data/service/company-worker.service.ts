import { Injectable } from '@angular/core';
import {CompanyInfo} from "../models/interfaces/company-info.interface";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CompanyWorkerService {

  public industryList: Set<string> = new Set<string>()
  public typeList: Set<string> = new Set<string>()
  public resultList: CompanyInfo[] = [];
  public companyList: CompanyInfo[] = [];
  public actualityIndustry: CompanyInfo[] = [];
  public actualityName: CompanyInfo[] = [];
  public actualityType: CompanyInfo[] = [];
  public proxyTargetCompany: BehaviorSubject<CompanyInfo[]> = new BehaviorSubject<CompanyInfo[]>([])

  constructor(){
    this.proxyTargetCompany.next(this.companyList);
    this.resultList = this.companyList;
    this.actualityIndustry = this.companyList;
    this.actualityType = this.companyList;
    this.actualityName = this.companyList;
  }

  public getCompany(key: number): CompanyInfo{
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
    const bufferList: CompanyInfo[] = this.actualityIndustry.filter(x => this.actualityType.includes(x))
    for(let company of this.companyList){
      if(company.business_name.toLowerCase().indexOf(key.toLowerCase()) === 0){
        this.actualityName.push(company)
      }
    }
    this.resultList = bufferList.filter(x => this.actualityName.includes(x))
    this.proxyTargetCompany.next(this.resultList)
  }

  public searchByIndustry(key: string){
    const bufferList: CompanyInfo[] = this.actualityType.filter(x => this.actualityName.includes(x))
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
    const bufferList: CompanyInfo[] = this.actualityName.filter(x => this.actualityIndustry.includes(x))
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
}



