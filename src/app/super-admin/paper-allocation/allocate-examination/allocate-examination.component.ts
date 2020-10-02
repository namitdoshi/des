import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocate-examination',
  templateUrl: './allocate-examination.component.html',
  styleUrls: ['./allocate-examination.component.scss']
})
export class AllocateExaminationComponent implements OnInit {
  displayedColumns = ['name', 'action'];
  dataSource = ELEMENT_DATA1;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement1 {
  name: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
  {name: 'EVALUATOR'},
];
