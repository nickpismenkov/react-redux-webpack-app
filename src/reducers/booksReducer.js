import { FETCH_BOOKS } from '../types/Books';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export { booksReducer };
