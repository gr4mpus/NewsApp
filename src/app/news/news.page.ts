import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business').subscribe(
      data => {
        console.log(data);
        this.articles = data.articles;
      },
      error => {
        console.log(error);
      }
    )
  }

  newsContent(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-content']);
  }

}
