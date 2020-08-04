import { FETCH_BOOKS } from '../types/Books';
import { showLoader, hideLoader } from './Loader';

const fetchBooks = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch('http://localhost:3000/books/');
    const json = await response.json();
    dispatch({
      type: FETCH_BOOKS,
      payload: json,
    });
    dispatch(hideLoader());
  };
};

export { fetchBooks };
