import React from 'react';
import "./Radio.css";
import video from '../../assets/img/video.mp4'; 

const Radio = () => {
  return (
     <div className="video-box">
         <video autoPlay muted loop id="myVideo" >
            <source src={video} type="video/mp4"></source>
        </video> 
        <h1>Radio.</h1> 
     </div>
  )
}

export default Radio