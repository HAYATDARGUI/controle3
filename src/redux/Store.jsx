import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listTodoReducer from "./TodoSlice";
import UsersReducer from "./UserSlice"
const reducer = combineReducers({
    listTodo: listTodoReducer,
    users: UsersReducer,
});

const store = configureStore({reducer}); 


export default store; 