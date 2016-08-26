import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ShellComponent } from './shell/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<app-shell></app-shell>`,
  // templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ShellComponent]
})
export class AppComponent {
  title = 'app works!';
}
