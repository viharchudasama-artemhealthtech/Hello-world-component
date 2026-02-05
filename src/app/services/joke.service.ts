import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
    this.http = http
  }

  getJoke() {
    return this.http.get("assets/hospitals.json")
  }
}
