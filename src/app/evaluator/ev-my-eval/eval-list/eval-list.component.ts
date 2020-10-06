import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eval-list',
  templateUrl: './eval-list.component.html',
  styleUrls: ['./eval-list.component.scss']
})
export class EvalListComponent implements OnInit {
  displayedColumns = ['ExamCode'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  ExamCode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V'},
];
