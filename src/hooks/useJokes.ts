import { jokeApi } from '../services/joke';

export const useJokes = () => {
  const { useLazyGetJokesQuery } = jokeApi;
  const [getJokes, { data, isLoading, isFetching }] = useLazyGetJokesQuery();

  return { getJokes, data, isLoading, isFetching };
};
