import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import * as Pages from '../pages';
import * as Layouts from '../layouts';
//import { PageConstructorParams } from '../libs/base-page';

@NgModule({
  declarations: [
    AppComponent, ...Pages.Components, ...Layouts.Components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Pages.appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  // нельзя глобально создавать! у нас там route: ActivatedRoute и оно должно создаваться (в теории) для каждой страницы свое
  //providers: [PageConstructorParams],
  providers: [...Pages.Providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
