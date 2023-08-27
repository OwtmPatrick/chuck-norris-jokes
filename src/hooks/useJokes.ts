import { jokeApi } from '../services/joke';

export const useJokes = () => {
  const { useLazyGetJokesQuery } = jokeApi;
  const [fetchJokes, { data, isLoading, isFetching, error }] = useLazyGetJokesQuery();

  return { fetchJokes, data, isLoading, isFetching, error };
};
