import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategoryInitialState, CategoryType } from "./categorySlice.type";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase-config";


/**
 * @description: This function is used to make a REQUEST
 * @param {type} data?:object
 * @returns:Promise
 */


const initialState: CategoryInitialState ={
    categories : [],
    categoryLoader : false ,
} 

export const  getCategories = createAsyncThunk<CategoryType[],null|undefined,{rejectValue:string;}>("categoryList/getCategories", 
    async (_,{rejectWithValue}):Promise<any> =>{
    try {
        const list:CategoryType[] = [] ;
        const categoryRef = collection(db,"categories") ;
        const snapshots = await getDocs(categoryRef);

        snapshots.forEach((doc)=>list.push({...doc.data(),id:doc.id} as CategoryType));

        console.log("snapshots",snapshots);
        console.log("list", list );
        return list as CategoryType[] ;
    } catch (error) {
        console.log(error);
        return rejectWithValue("No data");

    }
})


export const categorySlice = createSlice({
    name:'categoryList',
    initialState,
    reducers:{},
    extraReducers:{
        [getCategories.pending.toString()]:(state)=>{
            state.categoryLoader = true ;
        },
        [getCategories.fulfilled.toString()]:(state,action:PayloadAction<CategoryType[]> ) =>{
            state.categories = action.payload ;
            state.categoryLoader = false ;
        },
        [getCategories.rejected.toString()]:(state)=>{
            state.categoryLoader = false ;
        }
    },
})

export default categorySlice.reducer;