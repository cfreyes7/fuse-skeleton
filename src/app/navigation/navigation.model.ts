import {FuseNavigationModelInterface} from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'cases',
        'title': 'Cases',
        'translate': 'NAV.SAMPLE.TITLE',
        'type': 'item',
        'icon': 'folder',
        'url': '/app/cases',
        'badge': {
          'title': 25,
          'translate': 'NAV.SAMPLE.BADGE',
          'bg': '#F44336',
          'fg': '#FFFFFF'
        }
      },
      {
        'id': 'task',
        'title': 'Task',
        'translate': 'NAV.SAMPLE.TITLE',
        'type': 'item',
        'icon': 'event',
        'url': '/app/task',
        'badge': {
          'title': 25,
          'translate': 'NAV.SAMPLE.BADGE',
          'bg': '#F44336',
          'fg': '#FFFFFF'
        }
      }, {
        'id': 'report',
        'title': 'Reports',
        'translate': 'NAV.SAMPLE.TITLE',
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
        }]
      }
    ];
  }
}
