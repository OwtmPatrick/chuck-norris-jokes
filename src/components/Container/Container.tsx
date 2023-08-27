import styles from './styles.module.scss';
import { Input } from '../input/Input';
import { Count } from '../Count/Count';
import { Jokes } from '../Jokes/Jokes';
import { useJokes } from '../../hooks/useJokes';

export const Container = () => {
  const { getJokes, data } = useJokes();

  return (
    <main className={styles.main}>
      <Input getJokes={getJokes} />
      {data?.total && <Count value={data.total} />}
      <Jokes jokes={data?.result ?? []} />
    </main>
  );
};
