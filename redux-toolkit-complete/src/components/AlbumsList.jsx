import React, { useState } from 'react'
import { useFetchAlbumsQuery,useAddAlbumsMutation,useRemoveAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import { FaTrashCan } from 'react-icons/fa6'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import ImageList from './ImageList'

function AlbumsList({user}) {
  //for queries
  const {data,error,isLoading}=useFetchAlbumsQuery(user);
  const [loading,setLoading]=useState(false)
  //for mutation
  const [addAlbum,result]=useAddAlbumsMutation();
  const [removeAlbum]=useRemoveAlbumMutation();

  const handleClick = ()=>{
      setLoading(true);
      addAlbum(user);
      setTimeout(() => {
        setLoading(false)
      }, 500);
  }
  const handleDelete = (album)=>{
      removeAlbum(album)
  }

  let content;
  if(isLoading){
     content=<Skeleton className='h-10 w-full' times={3} />
  }
  else if(error){
    content=<div>Error loading data</div>
  }
  else{
    content = data.map((album)=>{
        const header= <>
          <Button onClick={()=>handleDelete(album)}><FaTrashCan/></Button>
          <p>{album.title}</p>
          </>
       
        return (
            <ExpandablePanel key={album.id} header={header}>
                <ImageList album={album}/>
            </ExpandablePanel>
        )
    })
  }
  return (
    <div>
    <div className='m-2 flex flex-row items-center justify-between'>
      <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
       <Button loading={loading} onClick={handleClick} >Add Album+</Button>
    </div>
       <div>{content}</div>
    </div>
  )
}

export default AlbumsList