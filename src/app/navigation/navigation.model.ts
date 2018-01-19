import {FuseNavigationModelInterface} from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [{
      'id': 'applications',
      'title': 'Applications',
      'translate': 'NAV.APPLICATIONS',
      'type': 'group',
      'children': [{
        'id': 'cases',
        'title': 'Cases',
        'type': 'item',
        'icon': 'folder',
        'url': '/app/cases/list'
      }, {
        'id': 'report',
        'title': 'Reports',
        'type': 'collapse',
        'icon': 'assignment',
        'children': [{
          'id': 'dashboard',
          'title': 'Dashboard',
          'type': 'item',
          'icon': 'description',
          'url': '/app/report/dashboard'
        }, {
          'id': 'hospitalization',
          'title': 'Hospitalization',
          'type': 'item',
          'icon': 'description',
          'url': '/app/report/hospitalizations'
        }, {
          'id': 'daily',
          'title': 'Daily Referral',
          'type': 'item',
          'icon': 'description',
          'url': '/app/report/daily',
          'exactMatch': true
        }, {
          'id': 'task',
          'title': 'Task Reports',
          'type': 'item',
          'icon': 'description',
          'url': '/app/report/task',
          'exactMatch': true
        }, {
          'id': 'poc',
          'title': 'POC Metrics',
          'type': 'item',
          'url': '/app/report/poc',
          'icon': 'description',
          'exactMatch': true
        }]
      }]
    }];
  }
}
