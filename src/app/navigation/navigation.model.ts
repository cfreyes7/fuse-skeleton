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
  }
}
