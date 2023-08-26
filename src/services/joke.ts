import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Joke } from '../types';

export const jokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chucknorris.io/' }),
  endpoints: (builder) => ({
    getJokes: builder.query<Joke, string>({
      query: (query) => `jokes/search?query=${query}`
    })
  })
});

export const { useGetJokesQuery } = jokeApi;
