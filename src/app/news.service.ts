import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient, private router: Router) { }

  getData(url) {
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=APIKEY
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }

}
