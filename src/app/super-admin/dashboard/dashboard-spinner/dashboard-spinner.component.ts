import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-dashboard-spinner',
  templateUrl: './dashboard-spinner.component.html',
  styleUrls: ['./dashboard-spinner.component.scss']
})
export class DashboardSpinnerComponent implements OnInit {

  // color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 55;

  constructor() { }

  ngOnInit(): void {
  }

}
