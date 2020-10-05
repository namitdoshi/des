import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {
  hide = true;

  subjectDetail: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.subjectDetail = new FormGroup({
      subjectCode: new FormControl(null),
      subjectName: new FormControl(null),
      subjectClass: new FormControl(null),
      examYear: new FormControl(null),
      semester: new FormControl(null),
      stream: new FormControl(null)
    });
  }

  onSubmit() {

  }

}
