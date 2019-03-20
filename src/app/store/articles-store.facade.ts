import {Action} from '@ngrx/store';
import { Article } from '../core/models/articles';
import {Update} from '@ngrx/entity/src/models';



export enum ContactsActionTypes {

  LOAD_ALL = '[Articles] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Articles] LOAD ALL SUCCESS',

  LOAD = '[Articles] LOAD',
  LOAD_SUCCESS = '[Articles] LOAD SUCCESS',

  CREATE = '[Articles] CREATE',
  CREATE_SUCCESS = '[Articles] CREATE SUCCESS',

  PATCH = '[Contacts] PATCH',
  PATCH_SUCCESS = '[Contacts] PATCH SUCCESS',

  DELETE = '[Contacts] DELETE',
  DELETE_SUCCESS = '[Contacts] DELETE SUCCESS',

  FAILURE = '[Contacts] FAILURE',

  SET_CURRENT_CONTACT_ID = '[Contacts] SET CURRENT CONTACT ID',


  // SERVER SIDE SOCKET ACTIONS

  LIVE_CREATED = '[Contacts] LIVE CREATED',
  LIVE_UPDATED = '[Contacts] LIVE UPDATED',
  LIVE_DELETED = '[Contacts] LIVE DELETED',

}

export class SetCurrentContactId implements Action {
  readonly type = ContactsActionTypes.SET_CURRENT_CONTACT_ID;
  constructor(public payload: number) {}
}

export class LoadAll implements Action {
  readonly type = ContactsActionTypes.LOAD_ALL;
  constructor(public payload = null) {}
}

export class Load implements Action {
  readonly type = ContactsActionTypes.LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = ContactsActionTypes.CREATE;
  constructor(public payload: Contact) {}
}


export class Patch implements Action {
  readonly type = ContactsActionTypes.PATCH;
  constructor(public payload: Contact) {}
}

export class Delete implements Action {
  readonly type = ContactsActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = ContactsActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Contact[]) {}
}

export class LoadSuccess implements Action {
  readonly type = ContactsActionTypes.LOAD_SUCCESS;
  constructor(public payload: Contact) {}
}

export class CreateSuccess implements Action {
  readonly type = ContactsActionTypes.CREATE_SUCCESS;
  constructor(public payload: Contact) {}
}

export class PatchSuccess implements Action {
  readonly type = ContactsActionTypes.PATCH_SUCCESS;
  constructor(public payload: Update<Contact>) {}
}

export class DeleteSuccess implements Action {
  readonly type = ContactsActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = ContactsActionTypes.FAILURE;
  constructor(public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export type All =
    | SetCurrentContactId
    | LoadAll
    | Load
    | Create
    | Patch
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | PatchSuccess
    | CreateSuccess
    | DeleteSuccess
    | Failure;
