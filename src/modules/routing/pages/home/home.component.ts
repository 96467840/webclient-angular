import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  //template: `<app-layout><h3>Главная</h3></app-layout>`
  templateUrl:'./home.component.html',
})
export class HomeComponent {
  public isCollapsed = false;
}
