import { SHOW_LOADER, HIDE_LOADER } from '../types/Loader';

const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export { showLoader, hideLoader };
