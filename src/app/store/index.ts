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

export const getArticleEntitiesState = createSelector(
  getArticlesState,
  state => state.entities
   );
export const getArtcileById = (id: number) => createSelector(
    getArticlesState,
    getArticleEntitiesState,
     (entities) => entities[id]);

export const {
  selectAll: getAllArticles

} = fromArticles.articleAdapter.getSelectors(getArticlesState);


// export const getAllArticles = createSelector(
//   getArticlesState,
//   getAllArticle
// );




