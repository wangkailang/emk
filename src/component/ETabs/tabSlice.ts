import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { remove } from 'lodash';

const tabSlice = createSlice({
  name: 'tabs',
  initialState: [{
    title: '首页',
    content: 'dashboard',
    key: 'homepage',
  }],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    del: (state, action: PayloadAction<string>) => {
      remove(state, item => item.key === action.payload);
    }
  }
})

export const { add, del } = tabSlice.actions;

export default tabSlice.reducer;

export const selectTab = (state: RootState) => state.tabs;