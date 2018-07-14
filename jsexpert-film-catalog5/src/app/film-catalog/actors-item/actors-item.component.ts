import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmService } from '../film.service';
import { Actor } from '../shared/actors';

@Component({
  selector: 'app-actors-item',
  templateUrl: './actors-item.component.html',
  styleUrls: ['./actors-item.component.css']
})
export class ActorsItemComponent implements OnInit {

  @Input() actor: object;
  @Input() actors: Actor[];
  @Input() favorites;
//  @Output() favorite =  new EventEmitter<number>();

imgPath = this.filmsService.smallBackPath;
constructor(public filmsService: FilmService) { }

setFavorite(id: number): void {
  if (this.favorites.indexOf(id) + 1) {
    this.favorites.splice(this.favorites.indexOf(id), 1);
  } else {
    this.actors.forEach(item => {
      if (item.id === id) {
        this.favorites.push(item.id);
    }
  });
}
localStorage.setItem('favActors', JSON.stringify(this.favorites));
}

  ngOnInit() {
  }

}
