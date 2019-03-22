import * as fromArticles from './articles.reducer';
import {createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  articles: fromArticles.State;
}

export const reducers = {
  articles: fromArticles.reducer
  // more reducer here
};

// const selectArticles = fromArticles.articleAdapter.getSelectors();

export const getArticleFeatureState = createFeatureSelector<State>('articles');

export const getArticleEntitiesState = createSelector(
  getArticleFeatureState,
  state => state.articles
);

export const {
  selectAll: getAllArticle

} = fromArticles.articleAdapter.getSelectors(getArticleEntitiesState);

export const getAllArticles = createSelector(
  getArticleFeatureState,
  getAllArticle
);




