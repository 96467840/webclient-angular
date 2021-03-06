import { Injectable, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LayoutConstructorParams {
  constructor(public router: Router, public route: ActivatedRoute) {
  }
}

@Component({
  selector: 'app-layout-base',
  template: '',
  providers: [LayoutConstructorParams],
})
export class BaseLayout {
  routeName: string;
  private routeSubscription: Subscription;

  constructor(protected props: LayoutConstructorParams) {
    this.routeSubscription = props.route.data.subscribe(data => this.routeName = data['name']);
  }

  goHome() {
    this.props.router.navigate(['']);
  }

}
