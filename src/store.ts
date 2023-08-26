import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { jokeApi } from './services/joke';

export const store = configureStore({
  reducer: {
    [jokeApi.reducerPath]: jokeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jokeApi.middleware)
});

setupListeners(store.dispatch);
