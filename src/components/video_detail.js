import React from "react";

const VideoDetails=(props)=>{

if(!props.video){
  return <div>Loading...</div>
}

const videoId= props.video.id.videoId;
const url=`http://www.youtube.com/embed/${videoId}`;
    return (
      <iframe src={url}></iframe>

    )
}
export default VideoDetails;
