import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import { TestServiceWithSingleCreate } from '../libs/base-page';

// определение маршрутов
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', redirectTo: '/about', pathMatch: 'full' },
  { path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

export const Components = [HomeComponent, AboutComponent, ItemComponent, NotFoundComponent];

// глобальные сервисы для всех страниц, которые нужно создать только 1 раз (сессия, работа с формами и тд)
export const Providers = [];
