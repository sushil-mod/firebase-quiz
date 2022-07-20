import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { QuizType } from "./quizSlice.type";


/**
 * @description: This function is used to make a REQUEST
 * @param {type} data?:string|
 * @returns:Promise
 */


const initialState : QuizType = {
    categoryName : "",
    quizQuestions : [] ,
    selectedAnswer : [] ,
    activeQuestion : -1,
    score : 0,
}

export const getQuizQuestion = createAsyncThunk<QuizType,string,{rejectValue:string;}>("quiz/getQuizQuestion",
async (quizId,{rejectWithValue}):Promise<any> =>{
    try {
        const docSnap = await getDoc(doc(db,"quizzes",quizId))
        
        return docSnap.data();

    } catch (error) {
        
        return rejectWithValue("No data");
    }
}
)


export const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{
        updateNextActiveQue:(state)=>{
            state.activeQuestion = state.activeQuestion + Number(1);
        },
        updateSelectedAnswer:(state,action:PayloadAction<string | "">)=>{
            state.selectedAnswer = [...state.selectedAnswer,action.payload] ;
        }
    },
    extraReducers:{
        [getQuizQuestion.pending.toString()]:(state)=>{
           
        },
        [getQuizQuestion.fulfilled.toString()]:(state,action:PayloadAction<QuizType>)=>{
            state.activeQuestion = action.payload.activeQuestion ;
            state.categoryName = action.payload.categoryName ;
            state.quizQuestions = action.payload.quizQuestions ;
            state.score = action.payload.score ;
            state.selectedAnswer = action.payload.selectedAnswer ;
        },
        [getQuizQuestion.rejected.toString()]:(state)=>{

        },
    },
})

export const { updateNextActiveQue ,updateSelectedAnswer } = quizSlice.actions;
export default quizSlice.reducer;
