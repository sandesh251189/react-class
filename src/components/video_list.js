import React from 'react';
import VedioListItem from './video_list_item'

const VideoList =(props)=>{
  var videiosList =  props.videos.map((video)=>{
        return <VedioListItem key={video.etag} video={video}/>
    })
console.log(videiosList)
    return(
      <ul className="list-group">
        {videiosList}
      </ul>
    )
}

export default VideoList
