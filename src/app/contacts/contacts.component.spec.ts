import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { contact } from '../contact.model';
import { By } from '@angular/platform-browser';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactEl;
  let contactDl;
  let contactsEls;
  const formBuilder: FormBuilder = new FormBuilder();
  const contacts: any = [
    {
      _id: 'id',
      firstName: 'contactFn1', 
      lastName: 'contactLn1',
      index: '0',
      company: 'quicken Loans',
      email: 'quickenLoans@quickenLoans.com',
      phone: '1-800-QUICKENLOANS',
      address: 'quicken loans street'
  },
  { 
    _id: 'id1',
    firstName: 'contactFn2',
    lastName: 'contactLn2',
    index: '1',
    company: 'quicken Loans',
    email: 'quickenLoans@quickenLoans.com',
    phone: '1-800-QUICKENLOANS',
    address: 'quicken loans street' 
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule, FormsModule
      ],
      declarations: [ ContactsComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;

    contactDl  = fixture.debugElement.query(By.css('.card-container'));
    contactEl = contactDl.nativeElement;
    
    component.contactForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    component.contacts = contacts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two contacts', () => {
    contactsEls = contactEl.querySelectorAll('.card')
    expect(contactsEls.length).toEqual(2);
  });
});
