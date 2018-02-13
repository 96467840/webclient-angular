import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import * as Pages from './';
import * as Layouts from '../layouts';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasePage } from './base-page';

//import { TestServiceWithSingleCreate } from '../libs/base-page';

// определение маршрутов
const appRoutes: Routes = [
  { path: '',           data: { name: 'home' }, component: HomeComponent },
  { path: 'about',      data: { name: 'about' }, component: AboutComponent },
  { path: 'contact',    data: { name: 'contact' }, redirectTo: '/about', pathMatch: 'full' },
  { path: 'item/:id',   data: { name: 'item' }, component: ItemComponent },
  { path: '**',         data: { name: '404' }, component: NotFoundComponent }
];

const Components = [BasePage, HomeComponent, AboutComponent, ItemComponent, NotFoundComponent];

// глобальные сервисы для всех страниц, которые нужно создать только 1 раз (сессия, работа с формами и тд)
const Providers = [];

@NgModule({
  declarations: [...Components, ...Layouts.Components],
  imports: [
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [...Providers],
})
export class AppRoutingModule { }
