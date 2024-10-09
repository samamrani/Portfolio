import { configureStore } from '@reduxjs/toolkit';
import samReducer from './samSlice';

const store = configureStore({
  reducer: {  
    sam: samReducer, 
  },
});

export default store;