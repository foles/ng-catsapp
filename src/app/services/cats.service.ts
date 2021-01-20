import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCats() {
    return this.http.get<any[]>('https://api.thecatapi.com/v1/breeds');
  }

  get18pictures() {
    return this.http.get<any[]>('https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=0&category_ids=1&sub_id=demo-b7e1c3');

  }
}
