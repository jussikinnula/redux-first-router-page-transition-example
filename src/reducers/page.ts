import { NOT_FOUND } from 'redux-first-router'

const components: any = {
  LIST: 'List',
  ITEM: 'Item',
  ERROR: 'Error',
  [NOT_FOUND]: 'NotFound'
}

export default (state: string = 'LIST', action: any = {}) => {
  if (components[action.type]) return components[action.type];
  return state;
};
