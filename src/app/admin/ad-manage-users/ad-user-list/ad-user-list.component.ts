import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-user-list',
  templateUrl: './ad-user-list.component.html',
  styleUrls: ['./ad-user-list.component.scss']
})
export class AdUserListComponent implements OnInit {
  displayedColumns = ['name', 'username', 'role', 'emailId', 'status', 'edit'];
  dataSource = ELEMENT_DATA;
  constructor() { }

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
  {name: 'Mukesh', username: 'scanner', role: 'SCANNER', emailId: 'abc@abc.com', status: 'Y'},
];
