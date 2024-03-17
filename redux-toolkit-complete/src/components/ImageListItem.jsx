import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { useRemovePhotoMutation } from '../store'

function ImageListItem({photo}) {
    const [removePhoto, result] = useRemovePhotoMutation();

    const handleDelete = ()=>{
        removePhoto(photo)
    }
  return ( 
    <div className=' relative cursor-pointer m-2'>
     <img className='h-20 w-20 inline '  src={photo.url} alt='random pic'/>
        <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
            <FaTrashCan onClick={handleDelete} className='text-3xl'/>
        </div>
    </div>
  )
}

export default ImageListItem