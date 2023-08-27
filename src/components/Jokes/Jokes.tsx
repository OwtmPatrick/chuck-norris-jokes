import { FC } from 'react';
import type { Joke as JokeType } from '../../types';
import { Joke } from '../Joke/Joke';
import styles from './styles.module.scss';

export const Jokes: FC<{ jokes: JokeType[] }> = ({ jokes }) => (
  <section className={styles.jokes}>
    {jokes.map((joke, index) => (
      <Joke key={joke.id} joke={joke} isLarge={index < 3} />
    ))}
  </section>
);
