import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'flox-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

  myCases: boolean;

  displayedColumns = ['patient', 'status', 'pocType', 'mainDx', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  priority: any;

  priorities: Array<{ name: string, color: string }> = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.priorities = [
      {
        name: 'All',
        color: null
      }, {
        name: 'Closed',
        color: 'warn'
      }, {
        name: 'Open',
        color: 'primary'
      }, {
        name: 'Unassigned',
        color: 'warning'
      }, {
        name: 'Extended',
        color: 'accent'
      },
    ];
    this.priority = this.priorities[0];
  }

  setPriority(value: any) {
    this.priority = value;
  }

  toggleMyCases() {
    this.myCases = !this.myCases;
  }

  openPoc(id: any) {
    this.router.navigate(['/app', { outlets: { form: 'form/poc/system' } }]);
  }

}

export interface Element {
  name: any,
  dob: any,
  gender: any,
  avatar: any,
  updated: any,
  type: any,
  id: any;
  status: any;
  pocType: any;
  mainDx: any;
}

const ELEMENT_DATA: Element[] = [
  { name: 'James Travis', dob: 'Jan 12 1976', gender: 'Male', avatar: 'james', updated: 'Jan 12, 2018', type: '11 or more Rxs', status: 'Open', id: 1, pocType: null, mainDx: 'R53.81 Other malaise / SO2.40DD Maxillary fracture, left side, 7thD' },
  { name: 'Katherine Smith', dob: 'Jan 12 1976', gender: 'Female', avatar: 'katherine', updated: 'Jan 13, 2018', type: 'DM', status: 'Closed', id: 2, pocType: null, mainDx: 'Unknown' },
  { name: 'Katina Aals', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Katina', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Extended', id: 3, pocType: 'SNF', mainDx: 'Unknown' },
  { name: 'Helen M. Chacon', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Helen', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Extended', id: 4, pocType: 'OBS', mainDx: 'F10.129 Alcohol Abuse With Intoxication, Unspecified' },
  { name: 'Elizabeth T. McInnis', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Josefina', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 5, pocType: 'INPATIENT', mainDx: 'R56.9 UNSPECIFIED CONVULSIONS' },
  { name: 'Ronald A. Darlington', dob: 'Jan 12 1976', gender: 'Male', avatar: 'vincent', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 6, pocType: 'SNF', mainDx: ' Z96.641 Presence of right artificial hip joint' },
  { name: 'Ariel R. Keyes', dob: 'Jan 12 1976', gender: 'Male', avatar: 'Arnold', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 7, pocType: 'REHAB', mainDx: 'N17.9 Acute Kidney Failure, Unspecified' },
  { name: 'James M. Simmons', dob: 'Jan 12 1976', gender: 'Male', avatar: 'garry', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 8, pocType: 'ER', mainDx: 'Unknown' },
  { name: 'Mae A. Davis', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Odessa', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 9, pocType: 'OBS to Inpatient', mainDx: 'R42 DIZZINESS AND GIDDINESS R51 HEADACHE' },
  { name: 'Robert T. Meneses', dob: 'Jan 12 1976', gender: 'Male', avatar: 'Tyson', updated: 'Jan 13, 2018', type: 'Referred Pts', status: 'Open', id: 10, pocType: null, mainDx: 'Unknown' },
];
