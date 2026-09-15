import type { FishingResult, FishingResultStats } from '../fishing-result.types';

export const calculateFishingResultStats = ({ result }: FishingResult): FishingResultStats => {
  if (result.length === 0) {
    return {
      averageWeight: null,
      bestBait: null,
      fishCount: 0,
      maxWeight: null,
    };
  }

  const baitCounts = new Map<string, number>();
  let maxWeight = result[0].weight;
  let totalWeight = 0;

  result.forEach(({ bait, weight }) => {
    baitCounts.set(bait, (baitCounts.get(bait) ?? 0) + 1);
    maxWeight = Math.max(maxWeight, weight);
    totalWeight += weight;
  });

  let bestBait = result[0].bait;
  let bestBaitCount = baitCounts.get(bestBait) ?? 0;

  baitCounts.forEach((count, bait) => {
    if (count > bestBaitCount) {
      bestBait = bait;
      bestBaitCount = count;
    }
  });

  return {
    averageWeight: totalWeight / result.length,
    bestBait,
    fishCount: result.length,
    maxWeight,
  };
};
