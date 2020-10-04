import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-sc-exam-card',
  templateUrl: './sc-exam-card.component.html',
  styleUrls: ['./sc-exam-card.component.scss']
})

export class ScExamCardComponent implements OnInit {

  examDetails: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.examDetails = new FormGroup({
      supp: new FormControl(null),
      roll: new FormControl(null)
    });
  }

  onSubmit() {

  }
}
