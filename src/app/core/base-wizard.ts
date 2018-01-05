import {Injector} from '@angular/core';
import {Router} from '@angular/router';
import {WizardService} from './services/wizard.service';

export abstract class BaseWizard {

  private _router: Router;

  private _wizardService: WizardService;

  constructor(private injector: Injector) {
    this._router = injector.get(Router);
    this._wizardService = injector.get(WizardService);
    this.onInit();
  }

  protected onInit() {
    this._wizardService.show();
  }

  protected close() {
    this._wizardService.close().then(() => {
      this._router.navigate(['/app', {outlets: {wizard: null}}]);
    });
  }
}
