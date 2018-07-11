import { IItem } from '../item.interface';

export default (state: IItem[] = [], action: any = {}) => {
  if (action.type === 'ITEMS_FETCHED' && action.payload.items) return action.payload.items;
  return state;
};
