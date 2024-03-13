import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const { snippet, statistics } = info
    const {channelTitle, thumbnails, title} = snippet
  return (
    <div className='m-2 p-2 w-72 shadow'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard