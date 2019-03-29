import * as fromArticles from './articles.reducer';
import {createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  articles: fromArticles.State;
}

export const reducers = {
  articles: fromArticles.reducer
  // more reducer here
};


export const getArticlesState = createFeatureSelector<State, fromArticles.State>('articles');

export const {
  selectAll: getAllArticles

} = fromArticles.articleAdapter.getSelectors(getArticlesState);


export const getArtcileById = (id: string) => createSelector(
  getArticlesState,
  fromArticles.getArticleById(id));




