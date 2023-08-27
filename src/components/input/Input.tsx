import { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  getJokes: (query: string) => void;
}

export const Input: FC<InputProps> = ({ getJokes }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length >= 3) {
      getJokes(value);
    }
  };

  return <input className={styles.input} placeholder="Search jokes..." onChange={onChange} />;
};
