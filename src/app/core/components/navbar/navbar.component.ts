import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flox-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {path: '/app/case-dashboard', label: 'Cases'},
    {path: '/app/tasks', label: 'Tasks'},
    {path: '/app/patient', label: 'Patients'},
    {path: '/app/reports', label: 'Reports'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
