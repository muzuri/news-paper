import { Article } from '../core/models/articles';
import {EntityState, createEntityAdapter } from '@ngrx/entity';
import { Actions , ArticlesActionsTypes, } from '../store/articles-actions';

export const articleAdapter = createEntityAdapter<Article>({

});


export interface State extends EntityState<Article> {

}

export const INIT_STATE: State = articleAdapter.getInitialState({

});



export function reducer(
  state: State = INIT_STATE,
  {type, payload }: Actions
) {

  switch (type) {

    case ArticlesActionsTypes.LOAD_ALL_SUCCESS : {
      return articleAdapter.addAll(payload, state);
    }


    case ArticlesActionsTypes.LOAD_SUCCESS : {
      return articleAdapter.addOne(payload, {
        ...state,
        currentContactId: payload.id
      });
    }

    case ArticlesActionsTypes.CREATE_SUCCESS : {
      return articleAdapter.addOne(payload, {
        ...state
      });
    }

    case ArticlesActionsTypes.REMOVE_SUCCESS : {
      return articleAdapter.removeOne(payload, state);
    }

    default: return state;

  }
}
