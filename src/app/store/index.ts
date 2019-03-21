import * as fromArticles from './articles.reducer';
import {createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  articles: fromArticles.State;
}

export const reducers = {
  articles: fromArticles.reducer
};

const getArticleFeatureState = createFeatureSelector<fromArticles.State>('article');

