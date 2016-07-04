import { provideRouter, RouterConfig } from '@angular/router';
import { MappitupComponent } from './mappitup';
import { RegisterComponent } from './user-actions/register';

export const routes: RouterConfig = [
  { path: '', component: MappitupComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
