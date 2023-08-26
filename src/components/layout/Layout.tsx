import styles from './styles.module.scss';
import { Input } from '../input/Input';
import { Count } from '../Count/Count';
import { Jokes } from '../Jokes/Jokes';

const data = [
  {
    id: 'hxdulftcswqglp1-qe3nfw',
    value:
      'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
    created_at: '01.05.2020',
    updated_at: '01.05.2020',
    url: 'https://goole.com'
  },
  {
    id: 'hxdulftcswqglp1-qe3nfw',
    value:
      'The single most successful anti-smoking measure was a commercial in the 1980s. In the commercial, there is a man smoking a cigarette. A voice then exclaims "Smoking will kill you." Nothing happens, until Chuck Norris blasts through the wall and kills the man with a single round house kick',
    created_at: '01.05.2020',
    updated_at: '01.05.2020',
    url: 'https://goole.com'
  },
  {
    id: 'hxdulftcswqglp1-qe3nfw',
    value:
      'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
    created_at: '01.05.2020',
    updated_at: '01.05.2020',
    url: 'https://goole.com'
  },
  {
    id: 'hxdulftcswqglp1-qe3nfw',
    value:
      'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
    created_at: '01.05.2020',
    updated_at: '01.05.2020',
    url: 'https://goole.com'
  },
  {
    id: 'hxdulftcswqglp1-qe3nfw',
    value:
      'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
    created_at: '01.05.2020',
    updated_at: '01.05.2020',
    url: 'https://goole.com'
  }
];

export const Layout = () => (
  <main className={styles.main}>
    <Input />
    <Count value={12} />
    <Jokes jokes={data} />
  </main>
);
