import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  displayedColumns = ['edit', 'name', 'username', 'role', 'emailId', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  username: string;
  role: string;
  emailId: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
  {name: 'Hydrogen', username: 'abc', role: 'Admin', emailId: 'abc@abc.com', status: 'Active'},
];
