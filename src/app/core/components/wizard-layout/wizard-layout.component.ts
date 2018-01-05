import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'flox-wizard-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./wizard-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
