import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flox-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any;

  @Output() listEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickRow() {
    this.listEvent.emit('edit');
  }

}
