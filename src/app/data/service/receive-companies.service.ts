import { Injectable } from '@angular/core';
import {ajax} from "rxjs/ajax";

@Injectable({
  providedIn: 'root'
})
export class ReceiveCompaniesService {

  constructor(
  ){}

  public initList() {
    return ajax.getJSON('https://random-data-api.com/api/company/random_company?size=100')
  }
}
