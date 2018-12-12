import { Injectable } from '@angular/core';
import { Film } from './shared/i-film';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  films: Film[];
  apiUrl = 'https://api.themoviedb.org/3';
  apiKey = '0994e7679a856150aadcecf7de489bce';
  movieUrl = `${this.apiUrl}/movie`;
  searchUrl = `${this.apiUrl}/search`;
  personUrl = `${this.apiUrl}/person`;
  params = `&api_key=${this.apiKey}&language=ru-RU`;

  imgPath = 'https://image.tmdb.org/t/p';
  midImgPath = `${this.imgPath}/w500`;
  smallImgPath = `${this.imgPath}/w185`;
  bigBackPath = `${this.imgPath}/w1280`;
  midBackPath = `${this.imgPath}/w780`;
  smallBackPath = `${this.imgPath}/w300`;

  constructor(private http: HttpClient) {}

  getPopular (subject: string, page?: number) {
    if (subject === 'films') {
      return this.http.get(`${this.movieUrl}/popular?page=${page}${this.params}`);
    } else {
      return this.http.get(`${this.personUrl}/popular?page=${page}${this.params}`);
    }
  }

  trackByFn(item): number {
    return item.id;
  }

  isFavorite(id: number, storage: string): boolean {
    const arr = JSON.parse(localStorage.getItem(storage));
    if (arr) {
      return (arr.includes(id)) ? true : false;
    }
  }

  getFavorites(storage): object[] {
    const arr = JSON.parse(localStorage.getItem(storage));
    if (arr) {
      return arr;
      } else {
        return [];
    }
  }

}
