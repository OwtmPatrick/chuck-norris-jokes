import { FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import styles from './styles.module.scss';
import { getErrorMessage } from '../../utils/getErrorMessage';

interface ErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

export const Error: FC<ErrorProps> = ({ error }) => {
  const errorMessage = getErrorMessage(error!);

  return <p className={styles.error}>{errorMessage}</p>;
};
