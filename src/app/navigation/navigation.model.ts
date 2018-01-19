import {FuseNavigationModelInterface} from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'applications',
        'title': 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'children': [
          {
            'id': 'cases',
            'title': 'Cases',
            'translate': 'NAV.SAMPLE.TITLE',
            'type': 'item',
            'icon': 'email',
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
            'children': [
              {
                'id': 'hospitalization',
                'title': 'Hospitalization',
                'type': 'item',
                'icon': 'description',
                'url': '/apps/e-commerce/dashboard'
              },
              {
                'id': 'daily',
                'title': 'Daily Referral',
                'type': 'item',
                'icon': 'description',
                'url': '/apps/e-commerce/products',
                'exactMatch': true
              },
              {
                'id': 'task',
                'title': 'Task Reports',
                'type': 'item',
                'icon': 'description',
                'url': '/apps/e-commerce/products/1/printed-dress',
                'exactMatch': true
              },
              {
                'id': 'poc',
                'title': 'POC Metrics',
                'type': 'item',
                'url': '/apps/e-commerce/orders',
                'icon': 'description',
                'exactMatch': true
              }
            ]
          }
        ]
      }
    ];
  }
}
