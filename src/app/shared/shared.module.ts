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
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule,
  MatListModule,
  MatDialogModule, MatGridListModule
} from "@angular/material";
import {FusePerfectScrollbarDirective} from './directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxErrorsModule} from '@ultimate/ngxerrors';
import {FileListComponent} from './components/file-list/file-list.component';
import {UploadComponent} from './components/upload/upload.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';

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
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatListModule,
    NgxErrorsModule,
    MatDialogModule,
    MatGridListModule
  ],
  declarations: [
    FusePerfectScrollbarDirective,
    FileListComponent,
    UploadComponent,
    PersonalInfoComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,

    FusePerfectScrollbarDirective,
    UploadComponent,
    FileListComponent,
    PersonalInfoComponent
  ],
  entryComponents: [
    PersonalInfoComponent
  ]
})
export class SharedModule {
}
