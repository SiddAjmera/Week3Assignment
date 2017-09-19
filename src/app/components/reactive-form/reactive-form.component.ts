import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public userDetailForm: FormGroup;
  public userDetails: User;
  public editMode: boolean = false;

  public ngOnInit() {
    this.userDetails = {
      "userId": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
          }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    this.userDetailForm = new FormGroup({
      'userId': new FormControl(this.userDetails.userId, [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]),
      'name': new FormControl(this.userDetails.name, Validators.required),
      'username': new FormControl(this.userDetails.username, Validators.required),
      'email': new FormControl(this.userDetails.email, [Validators.required, Validators.email]),
      'address': new FormGroup({
        'street': new FormControl(this.userDetails.address.street, Validators.required),
        'suite': new FormControl(this.userDetails.address.suite, Validators.required),
        'city': new FormControl(this.userDetails.address.city, Validators.required),
        'zipcode': new FormControl(this.userDetails.address.zipcode, Validators.required),
        'geo': new FormControl(this.userDetails.address.geo)
      }),
      'phone': new FormControl(this.userDetails.phone, Validators.required),
      'website': new FormControl(this.userDetails.website),
      'company': new FormGroup({
        'name': new FormControl(this.userDetails.company.name, Validators.required),
        'catchPhrase': new FormControl(this.userDetails.company.catchPhrase, Validators.required),
        'bs': new FormControl(this.userDetails.company.bs, Validators.required)
      })
    });
  }

  public toggleEditMode() {
    this.userDetails = this.userDetailForm.value;
    this.editMode = !this.editMode;
  }

  public onCancel() {
    this.userDetailForm.reset(this.userDetails);
    this.toggleEditMode();
  }

  public onClear() {
    this.userDetailForm.reset();
  }

}
