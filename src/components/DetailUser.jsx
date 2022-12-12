import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='Details' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="Profile Picture" />
                    </div>
                    <div>
                        <div className='detail'>
                            <label>nom: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='detail'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='detail'>
                            <label>Gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='detail'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='detail'>
                            <label>numero de telephone: </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='detail'>
                            <label>pois: </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='detail'>
                            <label>hauteur: </label>
                            <span>{user.height}</span>
                        </div>
                        <div className='detail'>
                            <label>BirthDate: </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='detail'>
                            <label>Group: </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='detail'>
                            <label>couleur d'oeil: </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
