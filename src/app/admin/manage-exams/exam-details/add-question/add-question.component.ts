import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  displayedColumns = ['edit', 'Question', 'MainQuestionMarks', 'SubQuestionTotal', 'QuestionType'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  'Question': string;
  'MainQuestionMarks': string;
  'SubQuestionTotal': string;
  'QuestionType': string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Question: '01', MainQuestionMarks: '50', SubQuestionTotal: '0', QuestionType: 'Objective'},
  {Question: '01', MainQuestionMarks: '50', SubQuestionTotal: '0', QuestionType: 'Objective'}
];

