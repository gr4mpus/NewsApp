import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.page.html',
  styleUrls: ['./news-content.page.scss'],
})
export class NewsContentPage implements OnInit {
  fullArticle: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.fullArticle = this.newsService.currentArticle;
  }

}
