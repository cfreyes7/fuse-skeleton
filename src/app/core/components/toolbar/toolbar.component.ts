import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'flox-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  displayQuickCase() {
    this.router.navigate(['/app', {outlets: {wizard: 'wizard/cases/quick'}}]);
  }
}
