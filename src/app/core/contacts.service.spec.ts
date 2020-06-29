import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, defer } from 'rxjs';
import { contact } from '../shared/contact.model';

describe('ContactsService', () => {
  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
  }
  let httpClientSpy: { get: jasmine.Spy };
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpClientSpy }
    ]
  }));

  it('should be created', () => {
    const service: ContactsService = TestBed.get(ContactsService);
    expect(service).toBeTruthy();
  });

  it('should return expected contacts', (done: DoneFn) => {
    const expectedContacts: contact[] = [
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

    const contactsService: ContactsService = TestBed.get(ContactsService);
    httpClientSpy.get.and.returnValue(asyncData(expectedContacts));
      contactsService.getContacts().subscribe((contacts) => {
          expect(contacts).toEqual(expectedContacts);
          done();
        }
      );

  });

  it('should return an error when the contacts server returns a 404', (done: DoneFn) => {
    const contactsService: ContactsService = TestBed.get(ContactsService);
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(asyncError(errorResponse))
    contactsService.getContacts().subscribe( contacts =>
        fail('expected an error, not heroes'),
        error  => expect(error.message).toContain('Http failure response for (unknown url): 404 Not Found')
    );
    done();
  });
});
