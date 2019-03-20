import {Action} from '@ngrx/store';
import { Article } from '../core/models/articles';

export enum ArticlesActionsTypes {

  LOAD_ALL = '[Articles] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Articles] LOAD ALL SUCCESS',

  LOAD = '[Articles] LOAD',
  LOAD_SUCCESS = '[Articles] LOAD SUCCESS',

  CREATE = '[Articles] CREATE',
  CREATE_SUCCESS = '[Articles] CREATE SUCCESS',


  REMOVE = '[Articles] REMOVE',
  REMOVE_SUCCESS = '[Articles] REMOVE SUCCESS',

}


export class LoadAll implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ALL;

}

export class Load implements Action {
  readonly type = ArticlesActionsTypes.LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = ArticlesActionsTypes.CREATE;
  constructor(public payload: Article) {}
}


export class Remove implements Action {
  readonly type = ArticlesActionsTypes.REMOVE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Article[]) {}
}

export class LoadSuccess implements Action {
  readonly type = ArticlesActionsTypes.LOAD_SUCCESS;
  constructor(public payload: Article) {}
}

export class CreateSuccess implements Action {
  readonly type = ArticlesActionsTypes.CREATE_SUCCESS;
  constructor(public payload: Article) {}
}



export class RemoveSuccess implements Action {
  readonly type = ArticlesActionsTypes.REMOVE_SUCCESS;
  constructor(public payload: number) {}
}



export type Actions =
    | LoadAll
    | Load
    | Create
    | Remove
    | LoadAllSuccess
    | LoadSuccess
    | CreateSuccess
    | RemoveSuccess
    ;
