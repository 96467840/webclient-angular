import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';


// определение маршрутов
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', redirectTo: '/about' },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', component: NotFoundComponent }
];

export const Components = [HomeComponent, AboutComponent, ItemComponent, NotFoundComponent];
