export const formatDate = (date: string): string => {
  const [year, month, day] = date.split(' ')[0].split('-');

  return `${day}.${month}.${year}`;
};
