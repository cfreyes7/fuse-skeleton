import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'flox-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('title') title: string;

  apps = [
    {
      'appName': 'Case',
      'logoUrl': 'http://cdn.dev.redwagon.xyz/static/case_managment.png',
      'claimId': 'case-managment-claim-123',
      'url': 'http://analytics.redwagoning.com'
    },
    {
      'appName': 'EHR',
      'logoUrl': 'http://cdn.dev.redwagon.xyz/static/ehr.png',
      'claimId': 'ehr-claim-123',
      'url': 'http://ehr.redwagoning.com'
    },
    {
      'appName': 'Analitycs',
      'logoUrl': 'http://cdn.dev.redwagon.xyz/static/analytics.png',
      'claimId': 'analitycs-claim-123',
      'url': 'http://flox.redwagoning.com'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  displayQuickCase() {
    this.router.navigate(['/app', {outlets: {form: 'form/cases/quick'}}]);
  }

  displayQuickPatient() {
    this.router.navigate(['/app', {outlets: {form: 'form/patient/quick'}}]);
  }
}
