import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'flox-task-reports',
  templateUrl: './task-reports.component.html',
  styleUrls: ['./task-reports.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskReportsComponent implements OnInit {

  displayedColumns = ['center', 'caseManager', 'week1', 'week2', 'week3', 'week4'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  month: string;

  listMonth: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.listMonth = [
      'All',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    this.month = this.listMonth[0];
  }

}

export interface Element {
  center: any;
  caseManager: any;
  week1: any;
  week2: any;
  week3: any;
  week4: any;
}

const ELEMENT_DATA: Element[] = [
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
  {center: 'MMWH', caseManager: 'Emily Tomson', week1: 13, week2: 11, week3: 5, week4: 3},
];
