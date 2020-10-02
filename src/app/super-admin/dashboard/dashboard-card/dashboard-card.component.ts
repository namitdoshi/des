import { Component, OnInit } from '@angular/core';

import { DashboardSpinnerComponent } from "../dashboard-spinner/dashboard-spinner.component";

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  spinners: [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
  }

}
