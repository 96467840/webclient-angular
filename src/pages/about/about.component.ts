import { Component } from '@angular/core';
import { BasePage, PageConstructorParams } from '../../libs/base-page';

@Component({
  selector: 'about-page',
  template: `<h3>О компании</h3>`,
  providers: [PageConstructorParams],
})
export class AboutComponent extends BasePage {
  constructor(protected props: PageConstructorParams) {
    super();
  }
}
