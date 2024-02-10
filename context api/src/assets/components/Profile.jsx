import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {userInfo} = useContext(UserContext);
    if(!userInfo) return <h1>please login</h1>

    return <h1>Hello {userInfo.username}</h1>
}

export default Profile