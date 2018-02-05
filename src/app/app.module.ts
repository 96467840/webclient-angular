import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import * as Pages from '../pages';

@NgModule({
  declarations: [
    AppComponent, ...Pages.Components //Pages.HomeComponent, Pages.AboutComponent, Pages.NotFoundComponent, Pages.ItemComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(Pages.appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
