import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input()
  contacts: [];

  showForm: boolean = false;

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  addContact() {
    this.showForm = true;
  }

  onSubmit() {
    console.warn(this.contactForm.value);
  }

}
