import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../shared/i-film';

@Component({
  selector: 'app-films',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmsComponent implements OnInit {

  counter = 0;
  name: string;
  count = 1;
  filmsPerPage = 3;
  allFilms: Film[] = this.filmsService.getFilms();
  films: Film[];
  isDisabled = false;

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.films = this.allFilms.slice(0, this.filmsPerPage * this.count);
    this.counter = this.updateCounter();
  }

  getNextPage(): void {
    this.count++;
    this.ngOnInit();
    if (this.count === (this.allFilms.length / this.filmsPerPage)) {
      this.isDisabled = true;
    }
  }

  sorting(value): void {
    this.filmsService.sortFilms(this.allFilms, value);

    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.filmsService.sortFilms(this.films, value);
    }
  }

  trackByFn(item): number {
    return item.id;
  }

  updateCounter(): number {
    return this.films.filter(item => item.isFavorite).length;
  }

  setCounterValue(evt): void {
    this.counter = evt;
  }

  searchFilm(_name): void {
    this.ngOnInit();
    if (this.name.length >= 2) {
    this.films = this.films.filter(item => item.name.toLowerCase().indexOf(this.name.toLowerCase()) + 1);
    }
  }

}
