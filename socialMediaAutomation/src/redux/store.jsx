import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../slices/SocialMediaTableSlice';
import modalReducer from '../slices/AddAccountModalSlice';

export const store = configureStore({
    reducer: {
        media: mediaReducer,
        modal: modalReducer,
    },
});
