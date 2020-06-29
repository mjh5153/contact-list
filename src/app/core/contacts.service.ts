import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from '../shared/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<contact[]> {
    return this.http.get<contact[]>('http://demo5838836.mockable.io/contact');
  }
}
