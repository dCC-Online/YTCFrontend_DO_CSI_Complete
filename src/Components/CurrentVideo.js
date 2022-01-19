import React from 'react';

const CurrentVideo = (props) =>{
    return(
        <div>
            <iframe className="Header-Gradient" style={{width:660, height: 415}} src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
        </div>
    );
}
export default CurrentVideo;