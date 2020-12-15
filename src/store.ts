import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import { ThunkAction } from 'redux-thunk';

export const history = createHashHistory();
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const middleware = [...getDefaultMiddleware(), router];

export const configuredStore = (initialState?: RootState) => {
  // Create Store
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(
      './rootReducer',
      // eslint-disable-next-line global-require
      () => store.replaceReducer(require('./rootReducer').default)
    );
  }
  return store;
};

export type Store = ReturnType<typeof configureStore>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;