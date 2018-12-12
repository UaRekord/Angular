import { Component, OnInit } from '@angular/core';
import { Actor } from '../shared/actors';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {

  counter = 1;
  actors: Actor[];
  isDisabled = true;
  isLoaded = true;
  favorites = [ ];

  constructor(public filmsService: FilmService) {  }

  ngOnInit() {
    this.getActors(this.counter);
    this.favorites = this.filmsService.getFavorites('favActors');
  }

  getActors(counter: number): void {
    this.filmsService.getPopular('actors', counter).subscribe(
      (actorsList: any)  => {
        this.actors = actorsList.results;
        this.isLoaded = false;
        sessionStorage.setItem('actors', JSON.stringify(this.actors)); // чтоб не дергать бекенд при поиске
      },
      err => {
        console.log('error');
      }
    );
  }

  getNewPage(evt): void {
    (evt === 'forward') ? this.counter++ : this.counter--;
    this.getActors(this.counter);
    this.isDisabled = (this.counter === 1);
  }


  searchAll(evt): void {
    this.actors = JSON.parse(sessionStorage.getItem('actors'));
    if (evt.length > 2) {
      this.actors = this.actors.filter(item => item.name.toLowerCase().includes(evt.toLowerCase()));
    }
  }
}
