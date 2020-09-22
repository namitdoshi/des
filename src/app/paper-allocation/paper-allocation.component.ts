import { Component, OnInit } from '@angular/core';

import { ExaminationListComponent } from './examination-list/examination-list.component';
import { ViewAllocationComponent } from './view-allocation/view-allocation.component';
import { AllocateExaminationComponent } from './allocate-examination/allocate-examination.component';

@Component({
  selector: 'app-paper-allocation',
  templateUrl: './paper-allocation.component.html',
  styleUrls: ['./paper-allocation.component.scss']
})
export class PaperAllocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
