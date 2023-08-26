import { FC } from 'react';
import styles from './styles.module.scss';

export const Count: FC<{ value: number }> = ({ value }) => (
  <div className={styles.count}>Found jokes: {value}</div>
);
