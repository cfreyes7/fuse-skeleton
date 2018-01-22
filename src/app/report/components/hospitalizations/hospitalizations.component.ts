import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'flox-hospitalizations',
  templateUrl: './hospitalizations.component.html',
  styleUrls: ['./hospitalizations.component.scss']
})
export class HospitalizationsComponent implements OnInit {
  displayedColumns = ['patient', 'center', 'pcp', 'insurance', 'admision_date', 'discharged_date', 'facility', 'actions'];
  dataSource = new MatTableDataSource<Element>(CASE_DATA);
  dateSelected: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Element {
  avatar: any;
  patient: string;
  center: string;
  pcp: string;
  insurance: string;
  admision_date: string;
  discharged_date: string;
  facility: string;
}

const CASE_DATA: Element[] = [{
  avatar: 'Katina',
  center: 'MBMC',
  patient: 'Katina Aals',
  pcp: 'MD, Rodolfo Dumenigo',
  insurance: 'CarePlus',
  admision_date: '12/11/17',
  discharged_date: '12/11/17',
  facility: 'Weschester General HO'
}, {
  avatar: 'Helen',
  center: 'MBMC',
  patient: 'Helen M. Chacon',
  pcp: 'MD, Rodolfo Dumenigo',
  insurance: 'CarePlus',
  admision_date: '12/11/17',
  discharged_date: '12/11/17',
  facility: 'Weschester General HO'
}, {
  avatar: 'Josefina',
  center: 'MBMC',
  patient: 'Elizabeth T. McInnis',
  pcp: 'MD, Rodolfo Dumenigo',
  insurance: 'CarePlus',
  admision_date: '12/11/17',
  discharged_date: '12/11/17',
  facility: 'Weschester General HO'
}, {
  avatar: 'vincent',
  center: 'MBMC',
  patient: 'Ronald A. Darlington',
  pcp: 'MD, Rodolfo Dumenigo',
  insurance: 'CarePlus',
  admision_date: '12/11/17',
  discharged_date: '12/11/17',
  facility: 'Weschester General HO'
}
];