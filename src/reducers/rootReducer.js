import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { loaderReducer } from './loaderReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  loader: loaderReducer,
});

export { rootReducer };
