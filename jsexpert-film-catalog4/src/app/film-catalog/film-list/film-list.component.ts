import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { IFilm } from '../shared/i-film';

@Component({
  selector: 'app-films',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmsComponent implements OnInit {

  counter: number;
  films: Array<IFilm>;
  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
  }

  sorting(value): void {
    if (value === 'ASC') {
      this.films.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
      this.films.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  }

  setUpdatedValue(evt): void {
   this.counter = evt;
  }

}
