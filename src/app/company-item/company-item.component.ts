import {Component, Input, OnInit} from '@angular/core';
import {ICompanyInfo} from "../data/models/interfaces/company-info.interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {
  @Input()public company!: ICompanyInfo

  constructor(
    private _router: Router
  ) {}

  public goToDetail(){
    this._router.navigateByUrl(`detail/company?id=${this.company.id}`).then()
  }
}



