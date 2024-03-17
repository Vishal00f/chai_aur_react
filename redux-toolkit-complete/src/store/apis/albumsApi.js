import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'
const albumsApi = createApi({
    reducerPath:"albums",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    endpoints(builder){
        return {
            fetchAlbums:builder.query({
                providesTags:(result,error,user)=>{
                    return [{type:'album',id:user.id}]
                },
                query:(user)=>{
                    return{
                        url:"/albums",
                        params:{
                            userId:user.id
                        },
                        method:'GET'
                    }
                }
            }),
            addAlbums:builder.mutation({
                invalidatesTags:(result,error,user)=>{
                    return [{type:'album',id:user.id}]
                },
                query:(user)=>{
                    return {
                        url:"/albums",
                        method:'POST',
                        body:{
                            title:faker.commerce.productName(),
                            userId:user.id
                        }
                         
                    }
                }
            }),
            removeAlbum:builder.mutation({
                invalidatesTags:(result,error,album)=>{
                    return [{type:'album',id:album.userId}]
                },
                query:(album)=>{
                    return {
                        url:`/albums/${album.id}`,
                        method:'DELETE'
                    }
                }
            })

        }
    }
})

export const {useFetchAlbumsQuery,useAddAlbumsMutation,useRemoveAlbumMutation} = albumsApi;
export {albumsApi}