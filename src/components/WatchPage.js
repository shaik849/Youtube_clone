import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { closeMenu } from '../utils/app.Slice'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const dispatch = useDispatch()
   let [searchParams] = useSearchParams()
   const video = searchParams.get('v')
    // console.log(searchParams.get("v"))
    useEffect(() =>{
        dispatch(closeMenu())
    })
  return (
    <div className='w-full'>
      <div className='flex w-full'>
    <div className='px-5 py-5 ml-20'>
        <iframe className='rounded-xl' width="900" height="500" src={"https://www.youtube.com/embed/" +video+"?autoplay=1"}
         title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className='p-5 w-full'>
    <LiveChat />
    </div>
    </div>
    <Comments />
    </div>
  )
}

export default WatchPage