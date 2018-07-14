import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  // styles: [`h2 {color: red;}`, ``]
})
export class MainComponent implements OnInit {
  pageName = 'Film Catalog Dashboard';

  list: string[] = ['asd', 'asd'];

  constructor() { }

  ngOnInit() { }

}
