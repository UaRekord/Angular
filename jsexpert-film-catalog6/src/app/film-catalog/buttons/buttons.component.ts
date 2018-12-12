import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() page = new EventEmitter<string>();
  counter = 1;

  isDisabled = true;

  constructor() { }

  ngOnInit() {

  }

  setButtonsToParent(param: string): void {
    this.page.emit(param);
    (param === 'forward') ? this.counter++ : this.counter--;
    this.isDisabled = (this.counter <= 1);
  }

}
