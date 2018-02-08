import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../pages/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  // нельзя глобально создавать! у нас там route: ActivatedRoute и оно должно создаваться (в теории) для каждой страницы свое
  //providers: [PageConstructorParams],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
