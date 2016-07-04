import { Component, OnInit } from '@angular/core';
import { RegistrationData } from './registration-data';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  // debugme
  private debugme : boolean = true;
  private debugContent : any = {
    keyupEvent : {},
    keydownEvent : {}
  }

  public model : RegistrationData;
  public superPowers : string[];
  public formIsActive : boolean;

  public userNickname : string;

  constructor() {}

  ngOnInit() {
    this.newRegistration();
    this.superPowers = [
      'nerdification', 'adamantium memory', 'legendary weakness'
    ];

    if (this.debugme) {
      this.logTheModel();
    }
  }

  onSubmit(registrationForm) {
    console.log('Submitted');
    console.log(registrationForm);
  }

  onKeyDown(event : KeyboardEvent) {
    this.debugContent.keydownEvent = event.key;
  }

  onKeyUp(value : string) {
    this.debugContent.keyupEvent = value;
  }

  newRegistration() {
    this.model = new RegistrationData('','');

    // Temporal workaround for form reset
    this.formIsActive = false;
    setTimeout(() => this.formIsActive = true, 0);
  }

  logTheModel() {
    console.log(JSON.stringify(this.model));
  }

  logTheForm(registrationForm) {
    console.log(registrationForm);
  }

}
