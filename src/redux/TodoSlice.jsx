import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getlistTodo = createAsyncThunk(
  "listTodo/getlistTodo",
  async () => {
          const response = await axios.get("https://dummyjson.com/todos");
          return response.data;
      }
);

const listTodoSlice = createSlice({
    name: 'todo',
    initialState: {
        data:[],
        loading:'idle',
        error:null,
        selectedlistTodo:'',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getlistTodo.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getlistTodo.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.data = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getlistTodo.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default listTodoSlice.reducer;