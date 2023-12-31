import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Joke } from '../types';
import { BASE_API_URL } from '../components/constants';

export const jokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getJokes: builder.query<{ result: Joke[]; total: number }, string>({
      query: (query) => `jokes/search?query=${query}`
    })
  })
});

export const { useGetJokesQuery } = jokeApi;
