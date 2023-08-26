import { FC } from 'react';
import { Joke as JokeType } from '../../types';
import { Joke } from '../Joke/Joke';
import styles from './styles.module.scss';

export const Jokes: FC<{ jokes: JokeType[] }> = ({ jokes }) => (
  <section className={styles.count}>
    {jokes.map((joke, index) => (
      <Joke key={joke.id} joke={joke} isSmall={index > 1} />
    ))}
  </section>
);
