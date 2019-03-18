
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Newspaper } from '../../core/models/newsp';
export enum NewsActionTypes {

  LOAD_ARTICLES= '[Articles] LOAD ALL ARTICLES',
  CREATE_ARTICLE = '[Articles] CREATE ARTICLE',
  LOAD_COMMENT = '[Comment] LOAD ALL COMMENT',
  CREATE_COMMENT = '[Articles] CREATE ARTICLE',
  DELETE_ARTICLE = '[Articles] DELETE ARTICLE'


}

// export const CREATE_COMMENT = 'Customer_Create';
// export const DELETE_COMMENT = 'Customer_Delete';


export class LoadArticle implements Action {
  readonly type = NewsActionTypes.LOAD_ARTICLES;
  constructor(public payload: null) {}
}
export class CreateArticle implements Action {

   readonly type = NewsActionTypes.CREATE_ARTICLE;
     constructor(public payload: Newspaper) {}
}
export class LoadComment implements Action {

  readonly type = NewsActionTypes.CREATE_ARTICLE;
    constructor(public payload: null) {}
}
export class CreateComment implements Action {

  readonly type = NewsActionTypes.CREATE_COMMENT;
    constructor(public payload: Newspaper) {}
}
export class DeleteArticle implements Action {

  readonly type = NewsActionTypes.DELETE_ARTICLE;
    constructor(public payload: number) {}
}


export type Actions =
|LoadArticle
|CreateArticle
|LoadComment
|CreateComment
|DeleteArticle;

