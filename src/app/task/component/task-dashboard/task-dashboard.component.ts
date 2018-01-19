import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'flox-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  displayedColumns = ['subject', 'type_activity', 'status', 'patient', 'doctor', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  MydataSource = new MatTableDataSource(MY_ELEMENT_DATA);

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  displayQuickTask() {
    this.router.navigate(['/app', {outlets: {form: 'form/task/quick'}}]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  subject: string;
  type_activity: string;
  status: string;
  patient: string;
  doctor: string;
  date: string;
}

const ELEMENT_DATA: Element[] = [
  {subject: 'Aaron Bennet', type_activity: 'Referral', status: 'Open', patient: 'Abbey Christensen', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
  {subject: 'Aaron Bennet', type_activity: 'Medication Alert', status: 'In progress', patient: 'Jhon Doe', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
  {subject: 'Aaron Bennet', type_activity: 'Referral', status: 'Open', patient: 'Abbey Christensen', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
];
const MY_ELEMENT_DATA: Element[] = [
  {subject: 'Aaron Bennet', type_activity: 'Hospitalized', status: 'Unassign', patient: 'Johanna Rondon', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
  {subject: 'Aaron Bennet', type_activity: 'Medication Alert', status: 'Open', patient: 'Kamilo Sanchez', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
  {subject: 'Aaron Bennet', type_activity: 'Referral', status: 'Open', patient: 'Robert Twis', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
  {subject: 'Aaron Bennet', type_activity: 'Death', status: 'Unassign', patient: 'Abbey Christensen', doctor: 'Abbey Christensen', date: 'Jan 2, 2016'},
];
