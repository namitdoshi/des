import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  displayedColumns = ['subjectCode', 'subjectName', 'subjectClass', 'examinationYear', 'edit'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  subjectCode: string;
  subjectName: string;
  subjectClass: string;
  examinationYear: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
  {subjectCode: 'MECH001', subjectName: 'Machine Design', subjectClass: '3', examinationYear: '2020'},
];

