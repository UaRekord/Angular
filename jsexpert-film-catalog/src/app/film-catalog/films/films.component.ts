import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  description = 'Middle card description';
  films: Object[] = [];

  constructor(public filmsService: FilmService) {
    this.films = this.filmsService.films;

  }

  ngOnInit() {

  }

}
