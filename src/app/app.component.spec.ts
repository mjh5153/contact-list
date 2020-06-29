import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '@angular/core';
import { ContactsService } from './core/contacts.service';
import { of } from 'rxjs';
import { contact } from './shared/contact.model';

describe('AppComponent', () => {
  let fixture;
  let app;
  @Component({selector: 'app-contacts', template: ''})
  class ContactsComponent {
    @Input()
    contacts = [];
  }

  const contactsServiceStub = jasmine.createSpyObj('ContactsService', ['getContacts']);
  contactsServiceStub.getContacts.and.returnValue(of(contact['']));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ContactsComponent
      ],
      providers: [
        { provide: ContactsService, useValue: contactsServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }))

  it('should create the app', () => { 
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Contacts'`, () => {
    expect(app.title).toEqual('Contacts');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Contacts');
  });
});
