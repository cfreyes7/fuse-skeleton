import {FuseNavigationModelInterface} from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'cases',
        'title': 'Cases',
        'type': 'item',
        'icon': 'folder',
        'url': '/app/cases/list'
      }
    ];
    this.model = [{
      'id': 'applications',
      'title': 'Applications',
      'translate': 'NAV.APPLICATIONS',
      'type': 'group',
      'children': [{
        'id': 'sample',
        'title': 'Sample',
        'translate': 'NAV.SAMPLE.TITLE',
        'type': 'item',
        'icon': 'email',
        'url': '/sample',
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
