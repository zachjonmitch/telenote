import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getContactData() {
    return this.http.get('http://devapp.telenotes.com/api/data/zach-mitchell');
  }

  postContactData() {

  }

  deleteCompanyFromAPI(id) {
    return this.http.delete('http://devapp.telenotes.com/api/data/zach-mitchell/' + id);
  }

  updateContactData() {

  }

}
