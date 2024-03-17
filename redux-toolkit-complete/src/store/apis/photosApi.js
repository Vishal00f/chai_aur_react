import { faker } from '@faker-js/faker'
//this is important very very (/react) because it will generate custom hooks 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints(builder){
        return {
            fetchPhotos:builder.query({
                providesTags:(result,error,album)=>{
                    const tags= result.map((photo)=>{
                        return {type:'photo',id:photo.id}
                    })
                    tags.push({type:'AlbumPhoto',id:album.id})
                    return tags;
                },
                query:(album)=>{
                    return {
                        url:'/photos',
                        params:{
                            albumId:album.id
                        },
                        method:'GET'
                    }
                }
            }),
            addPhoto:builder.mutation({
                invalidatesTags:(result,error,album)=>{
                    return [{type:'AlbumPhoto',id:album.id}]
                },
                query:(album)=>{
                    return{
                        url:'/photos',
                        method:'POST',
                        body:{
                            url:faker.image.url(150,150),
                            albumId:album.id
                        }
                    }
                }
            }),
            removePhoto:builder.mutation({
                invalidatesTags:(result,error,photo)=>{
                    return [{type:"photo",id:photo.id}]
                },
                query:(photo)=>{
                    return {
                        url:`/photos/${photo.id}`,
                        method:'DELETE'
                    }
                }
            })
        }
    }
})
export const {useFetchPhotosQuery,useAddPhotoMutation,useRemovePhotoMutation}=photosApi;
export {photosApi};