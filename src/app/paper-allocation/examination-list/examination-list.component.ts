import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.scss']
})
export class ExaminationListComponent implements OnInit {
  displayedColumns = ['Examination Code', 'Subject Code', 'Exam Name', 'Exam Date', 'Result Date', 'Paper Setting status', 'Allocate'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  examCode: string;
  subjectCode: string;
  examName: string;
  examDate: string;
  resultDate: string;
  paperSettingStatus: string;
  allocate: string;
}
let a=[];
for ( let i = 0; i < 20 ; i++){
  a.push( {
  examCode: 'string',
    subjectCode: 'string',
    examName: 'string',
    examDate: 'string',
    resultDate: 'string',
    paperSettingStatus: 'string',
    allocate: 'string'
});
}
// console.log(a);
const ELEMENT_DATA: PeriodicElement[] = [
  ...a
];
