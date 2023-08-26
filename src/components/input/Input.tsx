import { ChangeEvent } from 'react';
import styles from './styles.module.scss';
import { jokeApi } from '../../services/joke';

export const Input = () => {
  const { useLazyGetJokesQuery } = jokeApi;
  const [getJokes, { data }] = useLazyGetJokesQuery();

  console.log('data: ', data);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 3) {
      getJokes(value);
    }
  };

  return <input className={styles.input} placeholder="Search jokes..." onChange={onChange} />;
};
