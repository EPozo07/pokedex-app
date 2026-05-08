import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Detalle } from './pages/detalle/detalle';
import { About } from './pages/about/about';
import { Generacion } from './pages/generacion/generacion';
import { Favoritos } from './pages/favoritos/favoritos';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { authGuard } from './guards/auth-guard';
import{Perfil} from './pages/perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'detalle/:id', component: Detalle, canActivate: [authGuard] },
  { path: 'about', component: About, canActivate: [authGuard] },
  { path: 'generacion/:id', component: Generacion, canActivate: [authGuard] },
  { path: 'favoritos', component: Favoritos, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
];
