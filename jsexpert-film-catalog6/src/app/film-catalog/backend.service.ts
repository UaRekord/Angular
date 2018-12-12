import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  setFavMongo(id: number) {
    return this.http.post(`http://localhost:3000/films/favorites/${id}`, {});
  }

}
