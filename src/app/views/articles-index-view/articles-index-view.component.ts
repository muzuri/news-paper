import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as articlesActions from '../../store/articles.actions';
import { Observable } from 'rxjs';
import { Article } from '../../core/models/articles';
import * as fromRoot from '../../store';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-articles-index-view',
  templateUrl: './articles-index-view.component.html',
  styleUrls: ['./articles-index-view.component.css']
})
export class ArticlesIndexViewComponent implements OnInit {
   articles$: Observable<Article[]>;
   article1$: Observable<Article>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new articlesActions.LoadAll());
    this.articles$ = this.store.pipe(select(fromRoot.getAllArticles));

    this.article1$ = this.store.pipe(select(fromRoot.getArtcileById('3')));
    //   });
    // }

  }

  articleSelected() {
    console.log('the whole app has clicked');
  }
}
