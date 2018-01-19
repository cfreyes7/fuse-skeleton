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

const REPORT_DATA: Element[] = [{
  date: 'Dec 01',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 01',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 01',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 01',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}, {
  date: 'Dec 01',
  mbme: 0,
  mbmd: 13,
  mbmh: 11,
  mmwh: 5,
  mmww: 3,
}];
