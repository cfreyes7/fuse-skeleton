import {Component, Injector, OnInit} from '@angular/core';
import {BaseForm} from '../../../core/base-form';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './quick-case.component.html',
  styleUrls: ['./quick-case.component.scss']
})
export class QuickCaseComponent extends BaseForm implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
