import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-allocation',
  templateUrl: './view-allocation.component.html',
  styleUrls: ['./view-allocation.component.scss']
})
export class ViewAllocationComponent implements OnInit {
  displayedColumns = ['name', 'paperUploadStatus', 'viewPaper', 'approve'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  paperUploadStatus: string;
  viewPaper: string;
  approve: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Helium', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Lithium', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Beryllium', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Boron', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Carbon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Nitrogen', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Oxygen', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Fluorine', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Neon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Fluorine', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Neon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Carbon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Nitrogen', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Oxygen', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Fluorine', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Neon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Fluorine', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
  {name: 'Neon', paperUploadStatus: 'uploaded', viewPaper: 'View/ Download', approve: 'Approved'},
];
