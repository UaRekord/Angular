import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilm } from '../shared/i-film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})

export class FilmItemComponent implements OnInit {

  @Input() film: object;
  @Input() films: Array<IFilm>;
  @Output() favorite =  new EventEmitter<number>();
   bgc = false;
  constructor() {
  }

  setFavorite(id): void {
    this.films.forEach(function(item) {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
     });
  }

  setToParent(): void {
    this.favorite.emit(this.films.filter(item => item.isFavorite).length);
  }

  ngOnInit() {
  }

}
