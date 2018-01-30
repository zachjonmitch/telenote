import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getContactData() {
    return this.http.get('http://devapp.telenotes.com/api/data/zach-mitchell');
  }

  addNewContact(companyData) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put('http://devapp.telenotes.com/api/data/zach-mitchell', JSON.stringify({ companyData }), { headers });
  }

  deleteCompanyFromAPI(id) {
    return this.http.delete('http://devapp.telenotes.com/api/data/zach-mitchell/' + id);
  }

  updateContactData() {

  }

}
