import { Injectable, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class PageConstructorParams {
  constructor(public router: Router, public route: ActivatedRoute) {
    //console.log('PageConstructorParams::constructor.', route.component);
  }
}

export abstract class BasePage {
  // так как нам по любому надо прописывать дефолтный конструктор в каждом классе то нет смысла для всех страниц определять protected props
  //constructor(protected props: PageConstructorParams) { }
}
