import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/username/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
