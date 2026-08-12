const MONTH_PATTERN = /^(\d{4})-(\d{2})$/;
const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

const createUtcDate = (year, month, day) => {
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
};

export const toDateInputValue = (dateString) => {
  const match = dateString?.match(DATE_PATTERN) ?? dateString?.match(MONTH_PATTERN);
  if (!match) return '';

  const [, yearText, monthText, dayText] = match;
  const day = dayText ? Number(dayText) : 1;
  if (!createUtcDate(Number(yearText), Number(monthText), day)) return '';

  if (dayText) return dateString;
  return `${dateString}-01`;
};

export const formatResumeDate = (dateString, locale = 'en-US') => {
  if (!dateString) return '';

  const match = dateString.match(DATE_PATTERN) ?? dateString.match(MONTH_PATTERN);
  if (!match) return '';

  const [, yearText, monthText, dayText] = match;
  const date = createUtcDate(
    Number(yearText),
    Number(monthText),
    dayText ? Number(dayText) : 1,
  );

  if (!date) return '';

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    ...(dayText ? { day: 'numeric' } : {}),
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};
