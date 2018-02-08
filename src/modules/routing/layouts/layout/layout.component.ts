import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BaseLayout, LayoutConstructorParams } from '../base-layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  providers: [LayoutConstructorParams]
})
export class LayoutComponent extends BaseLayout {

  constructor(protected props: LayoutConstructorParams) {
    super(props);
  }
}
