import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flox-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
