import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import 'hammerjs';
import {SharedModule} from './core/modules/shared.module';
import {AppComponent} from './app.component';
import {FuseMainModule} from './main/main.module';
import {FuseSplashScreenService} from './core/services/splash-screen.service';
import {FuseConfigService} from './core/services/config.service';
import {FuseNavigationService} from './core/components/navigation/navigation.service';
import {TranslateModule} from '@ngx-translate/core';
import {routes} from './app.routes';
import {FormContentService} from './core/services/form-content.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    TranslateModule.forRoot(),
    FuseMainModule
  ],
  providers: [
    FuseSplashScreenService,
    FuseConfigService,
    FuseNavigationService,
    FormContentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
