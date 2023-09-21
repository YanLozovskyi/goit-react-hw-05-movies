import { format } from 'date-fns';

export function formatDate(dateString, formatString = 'dd MMMM yyyy, HH:mm') {
  const date = new Date(dateString);
  return format(date, formatString);
}
