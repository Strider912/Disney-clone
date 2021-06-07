import { createSlice } from "@reduxjs/toolkit";

const initialState={
  name : "",
  email : "",
  password : "",
}

const userSlice = createSlice({
  name : "user",
  initialState,
  reducers :{
    setuserlogin : (state, action) =>{
      state.name= action.payload.name
      state.email= action.payload.email
      state.photo= action.payload.photo
    },
    setsignout :  (state, action) =>{
      state.name= null;
      state.email= null;
      state.photo= null;
    }
  }
})

export const { setuserlogin , setsignout} = userSlice.actions

export const selectUsername = (state) => state.user.name
export const selectUseremail = (state) => state.user.email
export const selectUserphoto = (state) => state.user.photo

export default userSlice.reducer