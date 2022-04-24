import {configureStore} from '@reduxjs/toolkit';
import news from '../components/NewsList/news_slice';
import filter from './reducers/filter';
import stringMiddleware from '../middleware/stringMiddleware';

export const store = configureStore({
  reducer: {news, filter},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production"
})