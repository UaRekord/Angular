import { Injectable } from '@angular/core';
import { films } from './shared/films';
import { Film } from './shared/i-film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  films: Film[] = films;
  constructor() {}

  getFilms(): Film[] {
    this.films.forEach(item => (item.description = item.description.substr(0, 185) + '...'));
    return [...this.films];
  }

  sortFilms(arr, order): void {
    if (order === 'ASC') {
      arr.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (order === 'DESC') {
      arr.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  }

//  updateCounter(): number {
 //   return this.films.filter(item => item.isFavorite).length;
//  }

}
