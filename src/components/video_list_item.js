import React from 'react';

const VedioListItem =(props)=>{
  var imageURL=props.video.snippet.thumbnails.high.url;
    return(
      <li className="list-group-item">
      <div className="media">
  <div className="media-left">
    <img className="media-object" src={imageURL} />
  </div>
  <div className="media-body">
    <h4 className="media-heading">{props.video.snippet.title}</h4>
    <p>{props.video.snippet.description}</p>
  </div>
</div>

      </li>
    )
}

export default VedioListItem
