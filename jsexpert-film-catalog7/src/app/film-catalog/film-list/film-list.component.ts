import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../shared/i-film';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-films',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmsComponent implements OnInit {

  counter = 1;
  films: Film[];
  isLoaded = true;
  name: string;
  favorites: any;

  constructor(public filmsService: FilmService,
              public backendService: BackendService) {  }

  ngOnInit() {
    this.getFilms(this.counter);
    this.favorites = this.backendService.getFavorites();
  }

  getFilms(counter: number): void {
    this.filmsService.getPopular('films', counter).subscribe(
      (filmList: any)  => {
        this.films = filmList.results ;
        this.isLoaded = false;
        sessionStorage.setItem('films', JSON.stringify(this.films)); // чтоб не дергать бекенд
      },
      err => {
        console.error(err);
      }
    );
  }

  getNewPage(evt): void {
    if (evt === 'forward') {
      this.counter++;
      scrollTo(0, 0);
    } else {
      this.counter--;
    }
    this.getFilms(this.counter);
  }

  searchAll(evt): void {
    this.films = JSON.parse(sessionStorage.getItem('films'));
    if (evt.length > 2) {
      this.films = this.films.filter(item => item.title.toLowerCase().includes(evt.toLowerCase()));
    }
  }

}
