/* eslint-disable camelcase */
import { FC } from 'react';
import cn from 'classnames';
import { Joke as JokeType } from '../../types';
import styles from './styles.module.scss';

interface JokeProps {
  joke: JokeType;
  isSmall: boolean;
}

export const Joke: FC<JokeProps> = ({ joke, isSmall }) => {
  const { id, value, url, created_at, updated_at } = joke;

  return (
    <div className={cn(styles.joke, { isSmall })}>
      <a href={url} className={cn(styles.link, { isSmall })}>
        <h3 className={styles.title}>{value}</h3>
      </a>
      <div className={styles.bottomWrapper}>
        <span>{id}</span>
        <span>{updated_at || created_at}</span>
      </div>
    </div>
  );
};
