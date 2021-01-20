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
}
