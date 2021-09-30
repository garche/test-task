import {Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CompanyWorkerService } from "../data/service/company-worker.service";
import { CompanyInfo } from "../data/models/interfaces/company-info.interface";
import {mergeMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit{

  filterForm: FormGroup;
  public industryList!: Set<string>
  public typeList!: Set<string>


  constructor(
    private _formBuilder: FormBuilder,
    private _company: CompanyWorkerService
  ){
    this.filterForm = this._formBuilder.group({
      name: [null],
      industry: [null],
      type: [null]
    })
  }
  public ngOnInit(): void{
    this.industryList = this._company.industryList
    this.typeList = this._company.typeList
  }

  public searchByName(){
    this._company.searchByName(this.filterForm.get('name')?.value)
  }

  public searchByIndustry(){
    this._company.searchByIndustry(this.filterForm.get('industry')?.value)
  }

  public searchByType(){
    this._company.searchByType(this.filterForm.get('type')?.value)
  }
}


