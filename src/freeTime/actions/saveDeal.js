import uuid from 'uuid';
import { timeToMs } from '../../utils/timeConverter';

export function saveDeal(dealRawData) {
  const deal = {
    id: uuid(),
    start: timeToMs(parseInt(dealRawData.start.hours), parseInt(dealRawData.start.minutes)),
    finish: timeToMs(parseInt(dealRawData.finish.hours), parseInt(dealRawData.finish.minutes))
  };
  return { type: 'SAVE_DEAL', payload: { deal: deal } };
}
