import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BasePage, PageConstructorParams } from '../base-page';
import { LayoutComponent } from '../../layouts';

@Component({
  selector: 'app-page-item',
  template: `
<app-layout><h3>Модель {{id}}</h3>
  <div>Товар: {{product}}</div>
  <div>Цена: {{price}}</div>
  <a [routerLink]="['item', '2018']" [queryParams]="{'product':'from item page'}">item 2018</a>
</app-layout>`,
  providers: [PageConstructorParams],
})
export class ItemComponent extends BasePage {

  private id: number;
  private product: string;
  private price: string;

  private routeSubscription : Subscription;
  private querySubscription: Subscription;

  constructor(protected props: PageConstructorParams) {
    //super(props);
    super();

    // статичная привязка параметра маршрута
    //this.id = props.route.snapshot.params['id'];

    this.routeSubscription = props.route.paramMap.subscribe(params => this.id = params['id']);
    this.querySubscription = props.route.queryParamMap.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );

  }
}
