import { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';
import { debounce } from '../../utils/debounce';

interface InputProps {
  fetchJokes: (query: string) => void;
}

export const Input: FC<InputProps> = ({ fetchJokes }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length >= 3) {
      fetchJokes(value);
    }
  };
  const debouncedChange = debounce(onChange, 150);

  return (
    <input className={styles.input} placeholder="Search jokes..." onChange={debouncedChange} />
  );
};
