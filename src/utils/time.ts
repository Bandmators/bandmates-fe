/**
 * Measure relative time elapsed from now.
 * @param date Upload date
 * @returns days, hours, minutes | undefined
 */
export const relativeTime = (date: string | Date): string => {
  const uploadedAt = typeof date === 'string' ? new Date(date) : date;

  // Calculate the difference between current time and upload date
  const timeDiff = Date.now() - uploadedAt.getTime();

  // If the difference is negative or the date is invalid (e.g., string: when date is not valid)
  if (isNaN(timeDiff) || timeDiff < 0) {
    return 'Just now';
  }

  // Calculate years, months, weeks, days, hours, minutes
  const units = [
    { value: 365, label: 'year' },
    { value: 31, label: 'month' },
    { value: 7, label: 'week' },
    { value: 1, label: 'day' },
    { value: 1 / 24, label: 'hour' },
    { value: 1 / 60, label: 'minute' },
    { value: 1 / 3600, label: 'second' },
  ];

  // Find the appropriate unit
  for (const unit of units) {
    const count = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * unit.value));
    if (count >= 1) {
      return `${count} ${unit.label}${count === 1 ? '' : 's'} ago`;
    }
  }

  return 'Just now';
};
