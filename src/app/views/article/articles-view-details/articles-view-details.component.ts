import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../../../core/models/articles';
import * as fromRoot from '../../../store';
import { map, switchMap, tap, startWith } from 'rxjs/operators';
import * as ArticlesActions from '../../../store/articles.actions';
@Component({
  selector: 'app-articles-view-details',
  templateUrl: './articles-view-details.component.html',
  styleUrls: ['./articles-view-details.component.css']
})
export class ArticlesViewDetailsComponent implements OnInit {
  articles$: Observable<Article>;
  articleId: string;
  constructor(private route: ActivatedRoute, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    // this.store.dispatch(new ArticlesActions.LoadAll());
    this.articles$ = this.route.params.pipe(
      map(params => params.articleId),
      tap(id => this.articleId = id),
      switchMap(id => this.store.pipe(
        select(fromRoot.getArtcileById(id))
      ))
    );
  }

}

