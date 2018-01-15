import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'flox-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PersonalInfoComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
  }

}
