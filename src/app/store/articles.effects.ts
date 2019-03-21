import { Injectable } from '@angular/core';
import {
  exhaustMap,
  map,
  startWith,
  switchMap
} from 'rxjs/operators';

import * as ArticlesActions from './articles.actions';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Article } from '../core/models/articles';
import { ArticlesService } from '../core/Services/articles.service';


/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class ArticlesEffects {

  @Effect()
  loadAll$ = this.actions$.pipe(
      ofType<ArticlesActions.LoadAll>(ArticlesActions.ArticlesActionsTypes.LOAD_ALL), /* When [Contacts] LOAD ALL action is dispatched */
      switchMap(() => this.articlesService.loadArticles().pipe(
        map( articles => new ArticlesActions.LoadAllSuccess(articles) )
      )),
    );

  @Effect()
  load$ = this.actions$.pipe(
    ofType<ArticlesActions.Load>(ArticlesActions.ArticlesActionsTypes.LOAD),
    map( action => action.payload),
    switchMap( id => this.articlesService.loadArticleId(id).pipe(
      map( article => new ArticlesActions.LoadSuccess(article))
    ))
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType<ArticlesActions.Create>(ArticlesActions.ArticlesActionsTypes.CREATE),
    map( action => action.payload),
    exhaustMap( article => this.articlesService.createArticle(article).pipe(
      map( (createdArticle: Article) => new ArticlesActions.CreateSuccess(createdArticle)),
    ))
  );

  @Effect()
  destroy$ = this.actions$.pipe(
    ofType<ArticlesActions.Remove>(ArticlesActions.ArticlesActionsTypes.REMOVE),
    map( action => action.payload ),
    switchMap( id => this.articlesService.deleteArticle(id).pipe(
        map( () => new ArticlesActions.RemoveSuccess(id))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
  ) {}

}
