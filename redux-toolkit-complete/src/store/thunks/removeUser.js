import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/removeUser', async (user) => {
    const response= await axios.delete(`http://localhost:3000/users/${user.id}`)
    return user.id
    
  });
export {removeUser};