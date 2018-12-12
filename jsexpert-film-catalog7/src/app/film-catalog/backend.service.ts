import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  path = 'http://localhost:3000/api/films/favorites/';
  a_path = 'http://localhost:3000/api/actors/favorites/';
  arr = [];

  constructor(private http: HttpClient) { }

  getFavorites() {
    return this.http.get(`${this.path}`, {}).subscribe(
     (res: any) => this.arr = res,
      err => console.error(err)
      );
  }

  setFavMongo(id: number) {
    if (!this.arr.includes(id)) {
      this.arr.push(id);
      return this.http.post(`${this.path}${id}`, {});
    } else {
      this.arr.splice(this.arr.indexOf(id), 1);
      return this.http.delete(`${this.path}${id}`, {});
    }

  }

  isFavorite(id: number): boolean {
    return (this.arr.includes(id)) ? true : false;
    }

}

