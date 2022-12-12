import React from 'react'

function User() {
  return (
    <div className='ca' key={item.id}>
            <img src={item.image}  />
            <h1>{item.firstName}</h1>
            <p>{item.lastName}</p>
            <button onClick={() => navigate(`/Detail.user/${item.id}`)}>Detail user</button>
            <button onClick={() => navigate(`/ListTodo/${item.id}`)}>list des taches</button>
        </div>
  )
}

export default User