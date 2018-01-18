import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PersonalInfoComponent} from '../../../shared';

@Component({
  selector: 'flox-case-dashboard',
  templateUrl: './case-dashboard.component.html',
  styleUrls: ['./case-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaseDashboardComponent implements OnInit {

  myCases: boolean;

  rows = ['open', 'open', 'extended', 'extended', 'close', 'close', 'unassigned', 'unassigned'];

  priority: any;

  priorities: Array<{ name: string, color: string }> = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.priorities = [
      {
        name: 'All',
        color: null
      }, {
        name: 'High',
        color: 'danger'
      }, {
        name: 'Medium',
        color: 'warning'
      }, {
        name: 'Low',
        color: 'success'
      },
    ];
    this.priority = this.priorities[0];
  }

  showPersonalInfo() {
    this.dialog.open(PersonalInfoComponent);
  }

  preventPropagetion(e: any) {
    e.stopPropagation();
  }

  setPriority(value: any) {
    this.priority = value;
  }

  toggleMyCases() {
    this.myCases = !this.myCases;
  }
}
