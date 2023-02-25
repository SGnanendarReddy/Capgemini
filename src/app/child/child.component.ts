import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() emitter = new EventEmitter<any>();
  constructor() { }


  ngOnInit() {
  }

  handleClick(){
    this.emitter.emit('hello from child')
  }
}