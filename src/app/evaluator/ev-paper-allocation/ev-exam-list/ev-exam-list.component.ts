import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-exam-list',
  templateUrl: './ev-exam-list.component.html',
  styleUrls: ['./ev-exam-list.component.scss']
})
export class EvExamListComponent implements OnInit {
  displayedColumns = ['ExamCode',	'SubjectCode',	'ExamName',	'TargetDate',	'ViewAllocations'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  ExamCode: string;
  SubjectCode: string;
  ExamName: string;
  TargetDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
  { ExamCode: 'MAC-CFY6-Q5HK-GG0V', SubjectCode: 'MECH001', ExamName: 'Machine Design - May 2020', TargetDate: '23-01-2020' },
];

