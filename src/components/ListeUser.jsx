import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getUsers } from '../redux/UserSlice';
import { getlistTodo } from '../redux/TodoSlice';
import User from './User';
export default function users() {
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.user.data);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getlistTodo());
      },[dispatch]);
      console.log("users:", listUser);
  return (
    <div className="list">
      {listUser.length === 0 ? (
        <h1>Liste et vide</h1>
      ) : (
        listUser.map((item) =><user>{item}</user> )
      )}
    </div>
  )
}
