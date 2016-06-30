import { provideRouter, RouterConfig } from '@angular/router';
import { MappitupComponent } from './mappitup';

export const routes: RouterConfig = [
  { path: '', component: MappitupComponent },
  { path: 'mappitup', component: MappitupComponent },
  // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
