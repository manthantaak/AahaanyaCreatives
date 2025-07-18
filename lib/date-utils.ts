import { format, parseISO } from 'date-fns'

export function formatDate(date: string | Date) {
  if (typeof date === 'string') {
    return format(parseISO(date), 'MMM dd, yyyy')
  }
  return format(date, 'MMM dd, yyyy')
}

export function formatDateTime(date: string | Date) {
  if (typeof date === 'string') {
    return format(parseISO(date), 'MMM dd, yyyy hh:mm a')
  }
  return format(date, 'MMM dd, yyyy hh:mm a')
}
