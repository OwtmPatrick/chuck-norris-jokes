import styles from './styles.module.scss';
import { Input } from '../input/Input';
import { Count } from '../Count/Count';
import { Jokes } from '../Jokes/Jokes';
import { Skeleton } from '../Skeleton/Skeleton';
import { useJokes } from '../../hooks/useJokes';

export const Container = () => {
  const { fetchJokes, data, isLoading, isFetching } = useJokes();

  return (
    <main className={styles.main}>
      <Input fetchJokes={fetchJokes} />
      {data && 'total' in data && <Count value={data.total} />}
      {isLoading ? <Skeleton /> : <Jokes jokes={data?.result ?? []} isFetching={isFetching} />}
    </main>
  );
};
