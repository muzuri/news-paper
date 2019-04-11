import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/articles';
import * as ArticlesActions from '../../../store/articles.actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }
  onSave(article: Article) {
    console.log(`this is the one ${article}`);
    this.store.dispatch(new ArticlesActions.Create(article));

  }
}
