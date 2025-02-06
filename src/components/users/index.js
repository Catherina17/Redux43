import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers, addUsers } from '../../slices/usersSlice/index'

export const Users = () => {
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch(setUsers(data)));
    }, [dispatch]);    

    // useEffect(() => {
    //     const fetchUsers = async() => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         dispatch(setUsers(data))
    //     }

    //     fetchUsers()
    // }, [dispatch])

    const handleAddUser = () => {
        const newUser = { 
            id: users.length + 1,
            name: name,
        }

        dispatch(addUsers(newUser))
        setName('')
    }

    return (
        <div>
            <h3>Список пользователей</h3>
            <div>
                {users.map(user => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя пользователя"
            />
            <button onClick={handleAddUser} disabled={!name.trim()}>Добавить пользователя</button>
        </div>
    )
}
