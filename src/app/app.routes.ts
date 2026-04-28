import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Detalle } from './pages/detalle/detalle';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'detalle/:id', component: Detalle },
  { path: 'about', component: About }
];
