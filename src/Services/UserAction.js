import { LOAD, ADD, REMOVE, UPDATE } from './ActionTypes';

export const userLoad = users => ({
  type: LOAD,
  payload: users
});

export const userAdd = user => ({
  type: ADD,
  payload: user
});

export const userRemove = user => ({
  type: REMOVE,
  payload: user
});

export const userUpdate = user => ({
  type: UPDATE,
  payload: user
});
