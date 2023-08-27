/* eslint-disable camelcase */
import { FC } from 'react';
import cn from 'classnames';
import { Joke as JokeType } from '../../types';
import styles from './styles.module.scss';
import { formatDate } from '../../utils/formatDate';

interface JokeProps {
  joke: JokeType;
  isLarge: boolean;
}

export const Joke: FC<JokeProps> = ({ joke, isLarge }) => {
  const { id, value, url, created_at, updated_at } = joke;

  return (
    <li className={cn(styles.joke, { large: isLarge })}>
      <a href={url} className={styles.link} target="_blank" rel="noreferrer">
        <h3 className={cn(styles.title, { large: isLarge })}>{value}</h3>
      </a>
      <div className={styles.bottomWrapper}>
        <span>{id}</span>
        <span>{formatDate(updated_at ?? created_at)}</span>
      </div>
    </li>
  );
};
