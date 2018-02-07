import { Injectable, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// полезная инфа по наследванию компонентов
// https://ru.stackoverflow.com/questions/741297/angular-2-5-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D0%BC%D0%BD%D0%B8

@Injectable()
export class PageConstructorParams {
  constructor(public router: Router, public route: ActivatedRoute) {
    //console.log('PageConstructorParams::constructor.', route.component);
  }
}

function decor(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
  console.log("f(): evaluated");
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    console.log("f(): called");
  }
}

@Component({
  selector: 'app-page-base',
  template: '',
  providers: [PageConstructorParams],
})
export abstract class BasePage {
  @decor()
  method() { }

  // так как нам по любому надо прописывать дефолтный конструктор в каждом классе то нет смысла для всех страниц определять protected props
  //constructor(protected props: PageConstructorParams) { }
}

