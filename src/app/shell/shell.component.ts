import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../structure/header/index';
import { FooterComponent } from '../structure/footer/index';
import { SidemenuComponent } from '../structure/sidemenu/index';

@Component({
  moduleId: module.id,
  selector: 'app-shell',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <app-footer></app-footer>
    </footer>
  `,
  styleUrls: ['shell.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ]
})
export class ShellComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
