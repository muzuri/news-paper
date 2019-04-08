import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() article: Article;
  @Output() remove = new EventEmitter<Article>();
  constructor() { }

  ngOnInit() {
  }
  delete(article: Article) {
     this.remove.emit(article);
  }

}
