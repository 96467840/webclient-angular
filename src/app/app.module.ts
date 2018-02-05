import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home.component';
import { NotFoundComponent } from '../pages/not-found.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent/*, AboutComponent*/, NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
