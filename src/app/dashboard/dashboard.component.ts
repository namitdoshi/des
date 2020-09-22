import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from "../navbar/navbar.component";
import { DasboardTabsComponent } from "../dashboard/dasboard-tabs/dasboard-tabs.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
