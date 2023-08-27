import { FC } from 'react';
import cn from 'classnames';
import type { Joke as JokeType } from '../../types';
import { Joke } from '../Joke/Joke';
import styles from './styles.module.scss';

interface JokesProps {
  jokes: JokeType[];
  isFetching?: boolean;
}

export const Jokes: FC<JokesProps> = ({ jokes, isFetching }) => (
  <section className={cn(styles.jokes, { fetch: isFetching })}>
    <ul className={styles.list}>
      {jokes.map((joke, index) => (
        <Joke key={joke.id} joke={joke} isLarge={index < 3} />
      ))}
    </ul>
    {isFetching && (
      <div className={styles.loadingIndicatorWrapper}>
        <span className={styles.loadingIndicator} />
      </div>
    )}
  </section>
);
