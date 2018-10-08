export function updateDeal(deal) {
  return { type: 'UPDATE_DEAL', payload: { deal: deal } };
}
