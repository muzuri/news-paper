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

export const getArticlesState = createFeatureSelector<State, fromArticles.State>('articles');

// export const getArticleEntitiesState = createSelector(
//   getArticleFeatureState,
//   state => state.articles
// );

export const {
  selectAll: getAllArticles

} = fromArticles.articleAdapter.getSelectors(getArticlesState);

// export const getAllArticles = createSelector(
//   getArticlesState,
//   getAllArticle
// );




