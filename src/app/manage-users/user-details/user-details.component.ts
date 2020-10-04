import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  hide = true;

  userDetail: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.userDetail = new FormGroup({
      name: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      role: new FormControl(null),
      password: new FormControl(null),
      status: new FormControl(null)
    });
  }

  onSubmit() {

  }

}

interface Food {
  value: string;
  viewValue: string;
}
