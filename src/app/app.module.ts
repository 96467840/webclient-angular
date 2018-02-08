import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  // нельзя глобально создавать! у нас там route: ActivatedRoute и оно должно создаваться (в теории) для каждой страницы свое
  //providers: [PageConstructorParams],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
