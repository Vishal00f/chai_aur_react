import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUsers } from "../thunks/addUsers";
import { removeUser } from "../thunks/removeUser";
const usersSlice= createSlice({
    name:'user',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    extraReducers(builder){
        //we need three actions type when pending fullfilled and rejected
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.isLoading= true;
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.isLoading=false
            state.error=action.error
        })
        //cases for post
        builder.addCase(addUsers.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(addUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload)
        })
        builder.addCase(addUsers.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error
        })
        //cases for deleting the user
        builder.addCase(removeUser.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(removeUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            const updatedUsers= state.data.filter((user)=>{
                return user.id!==action.payload
            })
            state.data=updatedUsers
        })
        builder.addCase(removeUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error
            console.log(action)
        })
        
    }
})
export const usersReducer = usersSlice.reducer