import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  emailAddress:string;
  constructor() {
    this.emailAddress = "info@easyera.com";
  }
}
