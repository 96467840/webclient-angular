import { Router, ActivatedRoute } from '@angular/router';

export abstract class BasePage {

  constructor(protected router: Router, protected route: ActivatedRoute) { }
}
