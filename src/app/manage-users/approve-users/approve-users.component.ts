import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-users',
  templateUrl: './approve-users.component.html',
  styleUrls: ['./approve-users.component.scss']
})
export class ApproveUsersComponent implements OnInit {
  displayedColumns = ['approve', 'name', 'username', 'emailId'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  username: string;
  emailId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
  {name: 'Hydrogen', username: 'abc', emailId: 'abc@abc.com'},
];
