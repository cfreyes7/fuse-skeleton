import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'flox-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportDashboardComponent implements OnInit {

  displayedColumns = ['cmResponsible', 'open', 'extended', 'close'];

  displayedColumnsPlaned = ['planed', 'caseCount'];

  displayedColumnsPOCType = ['planed', 'caseCount'];

  dataSource = new MatTableDataSource<TypeCase>(ELEMENT_DATA);
  dataSourcePlaned = new MatTableDataSource<Planned>(ELEMENT_DATA_PLANED);
  dataSourcePOCType = new MatTableDataSource<POCType>(ELEMENT_DATA_POCTYPE);

  constructor() {
  }

  ngOnInit() {
  }

}

export interface TypeCase {
  cmResponsible: any;
  open: any;
  extended: any;
  close: any;
}

export interface Planned {
  planed: any;
  caseCount: any;
}

export interface POCType {
  planed: any;
  caseCount: any;
}

const ELEMENT_DATA: TypeCase[] = [
  {cmResponsible: 'unassigned', open: 5, extended: 2, close: 0},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
  {cmResponsible: 'List', open: 4, extended: 2, close: 2},
];

const ELEMENT_DATA_PLANED: Planned[] = [
  {planed: 'Inpatient', caseCount: 5},
  {planed: 'Observation', caseCount: 3},
  {planed: 'Snif', caseCount: 2},
  {planed: 'Rehab', caseCount: 3}
];

const ELEMENT_DATA_POCTYPE: POCType[] = [
  {planed: 'Hospitalization', caseCount: 5},
  {planed: '11 or more RXS', caseCount: 3},
  {planed: 'DM', caseCount: 2},
  {planed: 'Referal Pts', caseCount: 3}
];
