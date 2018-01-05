import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';
import {FusePerfectScrollbarDirective} from './directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxErrorsModule} from '@ultimate/ngxerrors';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatCheckboxModule,
    NgxErrorsModule
  ],
  declarations: [
    FusePerfectScrollbarDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    NgxErrorsModule,
    MatChipsModule,
    MatCheckboxModule,

    FusePerfectScrollbarDirective
  ]
})
export class SharedModule {
}
