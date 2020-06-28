import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs';
import { contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-list';
  contacts$: Observable<contact[]>;

  constructor(private contactsService: ContactsService) {

  }
  ngOnInit () {
    this.contacts$ = this.contactsService.getContacts();
  }
}
