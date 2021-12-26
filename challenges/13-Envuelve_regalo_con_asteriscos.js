function wrapGifts(gifts) {
  if (!gifts) {
    return [];
  }
  let sizeGift;
  const wrappedGifts = gifts.map((gift) => {
    sizeGift = gift.length;
    return `*${gift}*`;
  });
  const enclose = '*'.repeat(sizeGift + 2);
  return [enclose, ...wrappedGifts, enclose];
}

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
