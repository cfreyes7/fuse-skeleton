import {Component, Injector, OnInit} from '@angular/core';
import {BaseForm} from '../../../core/base-form';
import {FormValidatorService} from '../../../core/services/form-validator.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'flox-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent extends BaseForm implements OnInit {

  notifications = [
    {
      type: 'alert',
      icon: 'error',
      message: 'You have 5 unassign patients'
    },
    {
      type: 'warning',
      icon: 'access_time',
      message: 'You need to check Jhon Doe case'
    },
    {
      type: 'information',
      icon: 'notifications_active',
      message: 'Liz Carrillo has an appointment with you today'
    },
    {
      type: 'warning',
      icon: 'folder_shared',
      message: 'Liz Carrillo has an appointment with you today'
    }
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
