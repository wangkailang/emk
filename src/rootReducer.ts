import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import tabsReducer from './component/ETabs/tabSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    tabs: tabsReducer,
  });
}
