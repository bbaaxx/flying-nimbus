import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ShellComponent } from './shell';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<app-shell></app-shell>`,
  styleUrls: ['app.component.css'],
  directives: [ShellComponent]
})
export class AppComponent {
  title = 'app works!';
}
