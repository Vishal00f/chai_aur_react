import {React, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { fetchUsers,addUsers,removeUser } from '../store';
import Skeleton from './Skeleton'
import Button from './Button'
import useThunk from '../hooks/useThunk';
import UserListItem from './UserListItem';

function UsersList() {
  const [doFetchUsers,isLoading,error]=useThunk(fetchUsers);
  const [doAddUser,isAdding,isAddingError]=useThunk(addUsers);
   
  useEffect(() => {
    doFetchUsers()
  }, [])

  const { data } = useSelector((state) => {
    return state.users
  })
  
  if (error) {
    return <div>error fetching data</div>
  }
  const renderedUsers = data.map((user) => {
    return <UserListItem key={user.id} user={user} />
  })
  const handleClick = () => {
      doAddUser();
  }
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isAdding} onClick={handleClick}>+ Add User</Button>
        {isAddingError && 'error creating user'}
      </div>
      {isLoading?<Skeleton times={6} className="h-10 w-full" /> :renderedUsers }
    </div>
  )


}

export default UsersList