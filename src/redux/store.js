import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';

// Create a Redux store instance
const store = configureStore({
  reducer: {
    // Define your reducers here
    counter: counterReducer,
    
  }

})

export default store;