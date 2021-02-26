import {
  TODO_ITEM_CREATE,
  TODO_ITEM_COMPLETE,
  TODO_ITEM_REMOVE,
  TODO_ITEM_MODIFY,
  TODO_ITEM_SEARCH,
} from '../constants';

export const createItem = (item) => (dispatch) => {
  dispatch({
    type: TODO_ITEM_CREATE,
    payload: item,
  });
};
