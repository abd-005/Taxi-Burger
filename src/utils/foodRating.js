export const getFoodRating = (id) => {
  const numericId = Number(id);
  const rating = Number((3.5 + ((numericId * 7) % 16) / 10).toFixed(1));
  const isBestSeller = rating >= 4.7;

  return { rating, isBestSeller };
};