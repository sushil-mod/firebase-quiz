import { configureStore } from '@reduxjs/toolkit'
import categoryListReducer from '../features/category/categorySlice'
import quizReducer from '../features/quiz/quizSlice';

export const store = configureStore({
    reducer:{
        categoryList : categoryListReducer,
        quiz : quizReducer ,
     },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 