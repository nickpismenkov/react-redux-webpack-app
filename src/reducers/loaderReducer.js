import { SHOW_LOADER, HIDE_LOADER } from '../types/Loader';

const initialState = {
  loading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { loading: true };
    case HIDE_LOADER:
      return { loading: false };
    default:
      return state;
  }
};

export { loaderReducer };
