import { IItem } from '../item.interface';

export default (state: IItem = null, action: any = {}) => {
  if (action.type === 'ITEM_FETCHED' && action.payload.item) return action.payload.item;
  return state;
};
