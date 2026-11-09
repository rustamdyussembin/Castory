/** Parses a user-entered decimal (comma or dot separator). Returns `undefined` unless it is a finite positive number. */
export const parsePositiveDecimal = (value: string): number | undefined => {
  const normalizedValue = value.trim().replace(',', '.');
  if (!normalizedValue) return undefined;

  const number = Number(normalizedValue);
  return Number.isFinite(number) && number > 0 ? number : undefined;
};
