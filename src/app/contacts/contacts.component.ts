import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input()
  contacts: [];

  showForm: boolean = false;
  showSuccessMessage: boolean = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  get firstName() { return this.contactForm.get('firstName'); }

  get lastName() { return this.contactForm.get('lastName'); }

  get company() { return this.contactForm.get('company'); }

  get email() { return this.contactForm.get('email'); }

  get phone() { return this.contactForm.get('phone'); }

  get address() { return this.contactForm.get('address'); }

  addContact() {
    this.showForm = true;
  }

  onSubmit() {
    console.warn(JSON.stringify(this.contactForm.value));
    this.showSuccessMessage = true;
  }

}
