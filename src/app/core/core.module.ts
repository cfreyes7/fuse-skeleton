import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SplashScreenService} from './services/splash-screen.service';
import {LayoutComponent} from './components/layout/layout.component';
import {WizardLayoutComponent} from './components/wizard-layout/wizard-layout.component';
import {MatSidenavModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {WizardService} from './services/wizard.service';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormValidatorService} from './services/form-validator.service';
import {SvgRegisterService} from './services/svg-register.service';

@NgModule({
  imports: [
    SharedModule,
    MatSidenavModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    WizardLayoutComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  providers: [
    SplashScreenService,
    WizardService,
    FormValidatorService,
    SvgRegisterService
  ]
})
export class CoreModule {
}
