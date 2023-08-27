import cn from 'classnames';
import styles from './styles.module.scss';

export const Skeleton = () => (
  <ul className={styles.skeleton}>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <li key={index} className={cn(styles.skeletonItem, { large: index < 3 })}>
          <div className={cn(styles.title, { large: index < 3 })} />
          <div className={cn(styles.title, { large: index < 3 })} />
          <div className={cn(styles.title, { large: index < 3 })} />
          <div className={cn(styles.bottomWrapper, { large: index < 3 })}>
            <div className={styles.id} />
            <div className={styles.date} />
          </div>
        </li>
      ))}
  </ul>
);
