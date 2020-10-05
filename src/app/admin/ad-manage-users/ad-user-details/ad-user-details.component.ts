import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ad-user-details',
  templateUrl: './ad-user-details.component.html',
  styleUrls: ['./ad-user-details.component.scss']
})
export class AdUserDetailsComponent implements OnInit {
  foods: Food[] = [
    {value: 'Scanner', viewValue: 'Scanner'},
    {value: 'Evaluator', viewValue: 'Evaluator'},
  ];
  hide = true;
  userDetail: FormGroup;
  userDetail2: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.userDetail = new FormGroup({
      name: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      role: new FormControl(null),
      password: new FormControl(null),
      password2: new FormControl(null),
      active: new FormControl({value: null, disabled: true})
    });

    this.userDetail2 = new FormGroup({
      officeCode: new FormControl(null),
      officeName: new FormControl(null),
      contactPerson: new FormControl(null),
      address: new FormControl(null),
      phone: new FormControl(null),
      mobileNumber: new FormControl(null)
    });
  }

  onSubmit() {
  }

  onSubmit2() {
  }

}

interface Food {
  value: string;
  viewValue: string;
}
