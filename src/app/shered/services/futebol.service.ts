import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

  url: string = 'https://api.football-data.org/v3/competitions/';
  urlPK: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

  constructor(private http: HttpClient) { }

  getDados():Observable<any>{
    return this.http.get<any>(this.urlPK);
  }
}
