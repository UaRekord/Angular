import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../shared/i-film';
import { FilmService } from '../film.service';
import { BackendService } from '../backend.service';


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
  constructor(public filmsService: FilmService,
              public backendService: BackendService) { }

  setFavorite(id: number) {
  this.backendService.setFavMongo(id).subscribe();
}


ngOnInit() {

  }
}
