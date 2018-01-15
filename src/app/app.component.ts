import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SplashScreenService} from './core/services/splash-screen.service';
import {Router} from '@angular/router';
import {SvgRegisterService} from './core';

@Component({
  selector: 'flox-root',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fuseSplashScreen: SplashScreenService,
              private translate: TranslateService,
              private router: Router,
              private svgRegister: SvgRegisterService) {

    this.router.navigate(['/app', {outlets: {form: null}}]);

    // Add languages
    this.translate.addLangs(['en', 'tr']);

    // Set the default language
    this.translate.setDefaultLang('en');

    // Use a language
    this.translate.use('en');
  }
}
