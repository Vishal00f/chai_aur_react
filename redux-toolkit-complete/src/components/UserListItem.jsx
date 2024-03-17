import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { removeUser } from '../store'
import useThunk from '../hooks/useThunk'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './AlbumsList'

function UserListItem({ user }) {
  const [doRemoveUser, isLoading] = useThunk(removeUser)
  const handleClick = () => {
    doRemoveUser(user)
  }
  const header = <>
    <Button className='mr-3' loading={isLoading} onClick={handleClick}>
      <FaTrashCan />
    </Button>
    {user.name}</>
  return (
    (
      <ExpandablePanel header={header}>
        <AlbumsList user={user} />
      </ExpandablePanel>
    )
  )
}

export default UserListItem