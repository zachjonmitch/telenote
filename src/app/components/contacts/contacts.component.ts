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
  name:string = '';
  city:string = '';
  position:string = '';
  company:string = '';
  phone:string = '';

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'city': [null, Validators.required],
      'position': [null, Validators.required],
      'company': [null, Validators.required],
      'phone': [null, Validators.required]
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
    console.log(contact)
  }

}
