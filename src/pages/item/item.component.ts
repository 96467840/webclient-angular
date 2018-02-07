import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BasePage, PageConstructorParams } from '../../libs/base-page';

@Component({
  selector: 'app-page-item',
  template: `<h3>Модель {{id}}</h3>
                <div>Товар: {{product}}</div>
                <div>Цена: {{price}}</div>`,
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

    this.routeSubscription = props.route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = props.route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );

  }
}
