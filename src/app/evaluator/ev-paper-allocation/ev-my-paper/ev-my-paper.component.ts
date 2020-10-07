import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ev-my-paper',
  templateUrl: './ev-my-paper.component.html',
  styleUrls: ['./ev-my-paper.component.scss']
})
export class EvMyPaperComponent implements OnInit {

  userDetail: FormGroup;
  srcResult: string;

  constructor() { }

  ngOnInit(): void {
    this.userDetail = new FormGroup({
      examCode: new FormControl(null),
      comment: new FormControl(null),
      cPass: new FormControl(null),
      file: new FormControl(null)
    })
  }

  onSubmit() {}

}
