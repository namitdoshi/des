import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  displayedColumns = ['ExamCode', 'SubjectCode', 'ExamName', 'ExamDate', 'ResultDate', 'NumberofCopies', 'ScannedCopies',
    'EvaluatedCopies', 'edit'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  ExamCode: string;
  SubjectCode: string;
  ExamName: string;
  ExamDate: string;
  ResultDate: string;
  NumberofCopies: string;
  ScannedCopies: string;
  EvaluatedCopies: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    ExamCode: 'MAC-CFY6-Q5HK-GG0V',
    SubjectCode: 'MECH001',
    ExamName: 'Machine Design - May 2020',
    ExamDate: '2020-02-22',
    ResultDate: '2020-01-30',
    NumberofCopies: '100',
    ScannedCopies: '2',
    EvaluatedCopies: '1',
  }, {
    ExamCode: 'MAC-CFY6-Q5HK-GG0V',
    SubjectCode: 'MECH001',
    ExamName: 'Machine Design - May 2020',
    ExamDate: '2020-02-22',
    ResultDate: '2020-01-30',
    NumberofCopies: '100',
    ScannedCopies: '2',
    EvaluatedCopies: '1',
  }, {
    ExamCode: 'MAC-CFY6-Q5HK-GG0V',
    SubjectCode: 'MECH001',
    ExamName: 'Machine Design - May 2020',
    ExamDate: '2020-02-22',
    ResultDate: '2020-01-30',
    NumberofCopies: '100',
    ScannedCopies: '2',
    EvaluatedCopies: '1',
  }, {
    ExamCode: 'MAC-CFY6-Q5HK-GG0V',
    SubjectCode: 'MECH001',
    ExamName: 'Machine Design - May 2020',
    ExamDate: '2020-02-22',
    ResultDate: '2020-01-30',
    NumberofCopies: '100',
    ScannedCopies: '2',
    EvaluatedCopies: '1',
  }, {
    ExamCode: 'MAC-CFY6-Q5HK-GG0V',
    SubjectCode: 'MECH001',
    ExamName: 'Machine Design - May 2020',
    ExamDate: '2020-02-22',
    ResultDate: '2020-01-30',
    NumberofCopies: '100',
    ScannedCopies: '2',
    EvaluatedCopies: '1',
  },
];

