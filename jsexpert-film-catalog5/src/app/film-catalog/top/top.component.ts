import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  @Output() search =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
  setToParent(param: string) {
    this.search.emit(param);
  }

  searchAll() {
//    if (this.route.routerState.snapshot.url === 'films')

  }


}
