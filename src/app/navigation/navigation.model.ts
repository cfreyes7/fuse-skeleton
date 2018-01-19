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
          }
        ]
      }
    ];
  }
}
