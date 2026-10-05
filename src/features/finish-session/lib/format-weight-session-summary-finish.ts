export const formatWeightSessionSummaryFinish = (weight: number): string =>
  String(Number(weight.toFixed(2))).replace('.', ',');
