import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'flox-daily-referral',
  templateUrl: './daily-referral.component.html',
  styleUrls: ['./daily-referral.component.scss']
})
export class DailyReferralComponent implements OnInit {
  displayedColumns = ['date', 'mbmd', 'mbme', 'mbmh', 'mmwh', 'mmww'];
  dataSource = new MatTableDataSource<Element>(REPORT_DATA);
  dateSelected: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Element {
  date: string;
  mbmd: number;
  mbme: number;
  mbmh: number;
  mmwh: number;
  mmww: number;
}

const REPORT_DATA: Element[] = [
  {
  date: 'Dec 1, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 2, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 3, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 4, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 5, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 6, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 7, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 8, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 9, 2017',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}
];
