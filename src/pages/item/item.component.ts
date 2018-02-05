import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BasePage } from '../../libs/base-page';

@Component({
  selector: 'item-page',
  template: `<h3>Модель {{id}}</h3>
                <div>Товар: {{product}}</div>
                <div>Цена: {{price}}</div>`
})
export class ItemComponent extends BasePage {

  private id: number;
  private product: string;
  private price: string;

  private routeSubscription : Subscription;
  private querySubscription: Subscription;

  constructor(protected router: Router, protected route: ActivatedRoute) {
    super(router, route);
    // статичная привязка параметра маршрута
    //this.id = activateRoute.snapshot.params['id'];

    this.routeSubscription  = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );

  }
}
