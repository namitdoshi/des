import { Component, OnInit } from '@angular/core';

import { ApproveUsersComponent } from './approve-users/approve-users.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
