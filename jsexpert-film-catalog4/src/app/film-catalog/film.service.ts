import { Injectable } from '@angular/core';
import { films } from './shared/films';
import { IFilm } from './shared/i-film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  films: Array<IFilm> = films;
  constructor() {}

  getFilms(): Object[] {
    return [...this.films];
  }
}
