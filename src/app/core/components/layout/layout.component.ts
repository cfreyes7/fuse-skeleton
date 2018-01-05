import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WizardService} from '../../services/wizard.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'flox-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  private _sideNave: MatSidenav;

  constructor(private wizardService: WizardService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wizardService.wizardContainer = this._sideNave;
  }
}
