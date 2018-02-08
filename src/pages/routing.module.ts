import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import * as Pages from './';
import * as Layouts from '../layouts';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import { TestServiceWithSingleCreate } from '../libs/base-page';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', redirectTo: '/about', pathMatch: 'full' },
  { path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

const Components = [HomeComponent, AboutComponent, ItemComponent, NotFoundComponent];

// глобальные сервисы для всех страниц, которые нужно создать только 1 раз (сессия, работа с формами и тд)
const Providers = [];

@NgModule({
  declarations: [...Components, ...Layouts.Components],
  imports: [
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
