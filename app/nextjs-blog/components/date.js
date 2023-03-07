import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const utcDate = parseISO(dateString);
  return <time dateTime={dateString}>{format(utcDate, 'LLLL d, yyyy')}</time>;
}