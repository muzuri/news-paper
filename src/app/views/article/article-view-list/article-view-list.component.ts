import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as articlesActions from '../../../store/articles.actions';
import { Observable } from 'rxjs';
import { Article } from '../../../core/models/articles';
import * as fromRoot from '../../../store';
@Component({
  selector: 'app-article-view-list',
  templateUrl: './article-view-list.component.html',
  styleUrls: ['./article-view-list.component.css']
})
export class ArticleViewListComponent implements OnInit {
  articles$: Observable<Article[]>;
  article1$: Observable<Article>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new articlesActions.LoadAll());
    this.articles$ = this.store.pipe(select(fromRoot.getAllArticles));

    this.article1$ = this.store.pipe(select(fromRoot.getArtcileById('3')));
  }

}
