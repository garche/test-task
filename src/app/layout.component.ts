import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(
    private _router: Router
  ) {
  }

  public goToList(){
    this._router.navigateByUrl('list').then()
  }

  public goToMap(){
    this._router.navigateByUrl('map').then()
  }
}
