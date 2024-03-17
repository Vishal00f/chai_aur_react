import React from 'react'
import Skeleton from './Skeleton'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import ImageListItem from './ImageListItem'
import Button from './Button'
function ImageList({ album }) {
  const { data, error, isLoading } = useFetchPhotosQuery(album)
  const [addPhoto, result] = useAddPhotoMutation();
  let content;
  const handleAdd = () => {
    addPhoto(album)
  }

  if (isLoading) {
    content = <Skeleton className='h-8 w-8' times={4} />
  }
  else if (error) {
    content = <div>Error getting images</div>
  }
  else {
    content = data.map((photo) => {
      return <ImageListItem key={photo.id} photo={photo} />
    })
  }
  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Photos in {album.title}</h3>
        <Button loading={result.isLoading} onClick={handleAdd} >+ Add photo</Button>
      </div>
      <div className='flex flex-row justify-center'>
      {content}
      </div>
    </div>
  )
}

export default ImageList