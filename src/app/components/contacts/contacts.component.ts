import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactData:any;
  rForm: FormGroup;
  post:any;
  firstname:string = '';
  lastname:string = '';
  company:string = '';
  position:string = '';
  city:string = '';
  phone:string = '';
  email:string = '';

  constructor(private fb: FormBuilder, private dataService: DataService) {
    // Reactive Forms template group
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'company': [null, Validators.required],
      'position': [null, Validators.required],
      'city': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.required]
    });
  }

  ngOnInit() {
    // Grab API contact data and pass to contactData variable
    this.dataService.getContactData().subscribe(
      (data) => {
        console.log(data);
        this.contactData = data;
      }
    );
  }

  addNewContact(contact) {
    this.firstname = contact.firstname;
    this.lastname = contact.lastname;
    this.company = contact.company;
    this.position = contact.position;
    this.city = contact.city;
    this.phone = contact.phone;
    this.email = contact.email;

    const companyData = {
      CompanyName: this.company,
      contacts: [
        {
          firstname: this.firstname,
          lastname: this.lastname,
          title: this.position,
          ContactCity: this.city,
          PrimaryPhone: this.phone,
          email: this.email
        },
      ]
    };
    // Pass new-contact-form data to API
    this.dataService.addNewContact(companyData).subscribe(
      () => {
        console.log('new contact added');
      }
    );
  }

  deleteCompanyFromAPI(id) {
    // Pass company ID to API delete request
    this.dataService.deleteCompanyFromAPI(id).subscribe(
      () => {
        console.log('company deleted');
      }
    );
  }

}
