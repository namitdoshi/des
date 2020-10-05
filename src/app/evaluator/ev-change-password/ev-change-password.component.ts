import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ev-change-password',
  templateUrl: './ev-change-password.component.html',
  styleUrls: ['./ev-change-password.component.scss']
})
export class EvChangePasswordComponent implements OnInit {

userDetail: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userDetail = new FormGroup({
      password: new FormControl(null),
      newPass: new FormControl(null),
      cPass: new FormControl(null),
    })
  }

}
