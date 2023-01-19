import { configureStore } from '@reduxjs/toolkit';
import { renderSpaces } from './elementSlices';

const store = configureStore({
  reducer: {
    spaces: renderSpaces,
  },
});

export default store;
