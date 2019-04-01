import { Article } from '../core/models/articles';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Actions, ArticlesActionsTypes, } from './articles.actions';
import { state } from '@angular/animations';

export const articleAdapter = createEntityAdapter<Article>({

});


export interface State extends EntityState<Article> {
}

export const INIT_STATE: State = articleAdapter.getInitialState({
});



export function reducer(
  state: State = INIT_STATE,
  action: Actions
) {

  switch (action.type) {

    case ArticlesActionsTypes.LOAD_ALL_SUCCESS: {
      return articleAdapter.addAll(action.payload, state);
    }


    case ArticlesActionsTypes.LOAD_SUCCESS: {
      return articleAdapter.addOne(action.payload, state);
    }
    case ArticlesActionsTypes.CREATE_SUCCESS: {
      return articleAdapter.addOne(action.payload, state);
    }

    case ArticlesActionsTypes.REMOVE_SUCCESS: {
      return articleAdapter.removeOne(action.payload, state);
    }

    default: return state;

  }
}


export const getArticleById = (articleId: string) => (state: State) =>
  state.entities[articleId];




