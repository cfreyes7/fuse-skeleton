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
        name: 'Close',
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

  openPoc() {
    this.router.navigate(['/app', {outlets: {form: 'form/poc/system'}}]);
  }

}

export interface Element {
  patient: any;
  status: any;
  pocType: any;
  mainDx: any;
}

const ELEMENT_DATA: Element[] = [
  {patient: 1, status: 'Hydrogen', pocType: 1.0079, mainDx: 'H'},
  {patient: 2, status: 'Helium', pocType: 4.0026, mainDx: 'He'},
  {patient: 3, status: 'Lithium', pocType: 6.941, mainDx: 'Li'},
  {patient: 4, status: 'Beryllium', pocType: 9.0122, mainDx: 'Be'},
  {patient: 5, status: 'Boron', pocType: 10.811, mainDx: 'B'},
  {patient: 6, status: 'Carbon', pocType: 12.0107, mainDx: 'C'},
  {patient: 7, status: 'Nitrogen', pocType: 14.0067, mainDx: 'N'},
  {patient: 8, status: 'Oxygen', pocType: 15.9994, mainDx: 'O'},
  {patient: 9, status: 'Fluorine', pocType: 18.9984, mainDx: 'F'},
  {patient: 10, status: 'Neon', pocType: 20.1797, mainDx: 'Ne'},
  {patient: 11, status: 'Sodium', pocType: 22.9897, mainDx: 'Na'},
  {patient: 12, status: 'Magnesium', pocType: 24.305, mainDx: 'Mg'},
  {patient: 13, status: 'Aluminum', pocType: 26.9815, mainDx: 'Al'},
  {patient: 14, status: 'Silicon', pocType: 28.0855, mainDx: 'Si'},
  {patient: 15, status: 'Phosphorus', pocType: 30.9738, mainDx: 'P'},
  {patient: 16, status: 'Sulfur', pocType: 32.065, mainDx: 'S'},
  {patient: 17, status: 'Chlorine', pocType: 35.453, mainDx: 'Cl'},
  {patient: 18, status: 'Argon', pocType: 39.948, mainDx: 'Ar'},
  {patient: 19, status: 'Potassium', pocType: 39.0983, mainDx: 'K'},
  {patient: 20, status: 'Calcium', pocType: 40.078, mainDx: 'Ca'},
];
