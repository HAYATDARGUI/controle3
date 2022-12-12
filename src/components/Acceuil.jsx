import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from "./ListeUser"
import DetailUser from './DetailUser'
import ListeToDo from './ListTODO'

export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListeToDo/:id' element={<ListeToDo/>} />
            </Routes>
        </div>
    )
}
