import { TODO_ITEM_CREATE } from '../constants';

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ITEM_CREATE:
      const item = action.payload;
      return { state, ...item };

    default:
      return state;
  }
};
