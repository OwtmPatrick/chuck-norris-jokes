import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { DEFAULT_ERROR_MESSAGE } from '../components/constants';

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError): string => {
  if ('data' in error) {
    return error.data as string;
  }

  if ('message' in error) {
    return error.message as string;
  }

  return DEFAULT_ERROR_MESSAGE;
};
