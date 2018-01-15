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

  rows = [1, 2];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  showPersonalInfo() {
    let dialogRef = this.dialog.open(PersonalInfoComponent);
  }

  preventPropagetion(e: any) {
    e.stopPropagation();
  }
}
