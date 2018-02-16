import { Injectable, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MenuConstructorParams {
  constructor(public router: Router, public route: ActivatedRoute) {
  }
}

@Component({
  selector: 'app-menu-base',
  template: '',
  providers: [MenuConstructorParams],
})
export class BaseMenu {
  routeName: string;
  private routeSubscription: Subscription;

  constructor(protected props: MenuConstructorParams) {
    this.routeSubscription = props.route.data.subscribe(data => this.routeName = data['name']);
  }

}

export interface MenuItem {
  //page: PageRoute | null;
  icon?: string;
  className?: string;
  childs: MenuItem[];
  // пункт меню есть, но показывать его не надо! пункт нужно добавить в подменю для отображения активного родительского пункта и для отрисовки хлебных крошек
  hidden?: boolean;
}
