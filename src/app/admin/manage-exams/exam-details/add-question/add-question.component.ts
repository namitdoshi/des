import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {AddQuestionModalComponent} from '../add-question-modal/add-question-modal.component';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  displayedColumns = ['edit', 'Question', 'MainQuestionMarks', 'SubQuestionTotal', 'QuestionType'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddQuestionModalComponent, {
      maxWidth: '95vw',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

