import { Component } from '@angular/core';
import { BasePage, PageConstructorParams } from '../base-page';

@Component({
  selector: 'app-page-about',
  template: `<app-layout><h3>О компании</h3></app-layout>`,
  providers: [PageConstructorParams],
})
export class AboutComponent extends BasePage {
  constructor(protected props: PageConstructorParams) {
    super();
  }
}
