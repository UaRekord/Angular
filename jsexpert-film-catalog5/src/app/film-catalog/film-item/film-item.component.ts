import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Film } from '../shared/i-film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})

export class FilmItemComponent implements OnInit {

  @Input() film: object;
  @Input() films: Film[];
  @Input() favorites;
 // @Output() favorite =  new EventEmitter<number>();

  imgPath = this.filmsService.smallBackPath;
  constructor(public filmsService: FilmService) { }

  setFavorite(id: number): void {
    if (this.favorites.indexOf(id) + 1) {
      this.favorites.splice(this.favorites.indexOf(id), 1);
    } else {
      this.films.forEach(item => {
        if (item.id === id) {
          this.favorites.push(item.id);
      }
    });
  } // в локальном хранилище я храню айди избранных фильмов или актеров
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
}

  ngOnInit() {

  }
}
