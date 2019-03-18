import {Newspaper } from '../../core/models/newsp';
import {EntityState, createEntityAdapter } from '@ngrx/entity';
import { Actions as articlesActions, NewsActionTypes, } from '../actions/newsPapers.action';

// Let us initiate the adapter which will help us to manipulate our articles
export const articlesAdapter = createEntityAdapter<Newspaper>({
  selectId: (article: Newspaper) => article.id,
  sortComparer: false
});

export interface State extends EntityState<Newspaper> {
  currentArticleId?: number;
}
export const INIT_STATE: State = articlesAdapter.getInitialState({
  currentArticleId: undefined

});

export function reducer(
  state: State = INIT_STATE,
  {type, payload}: articlesActions) {

switch (type) {
  case NewsActionTypes.LOAD_ARTICLES: {
  return articlesAdapter.addAll( payload, state )
  }
}
}


