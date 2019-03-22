import * as fromArticles from './articles.reducer';
import {createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  articles: fromArticles.State;
}

export const reducers = {
  articles: fromArticles.reducer
  // more reducer here
};

const selectArticles = fromArticles.articleAdapter.getSelectors();

export const getArticleFeatureState = createFeatureSelector<fromArticles.State>('articles');

export const getAllArticles = createSelector(
  getArticleFeatureState,
  selectArticles
);




