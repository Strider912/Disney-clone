import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/Movie/movieSlice';
import userReducer from '../features/User/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user : userReducer,
  },
});
