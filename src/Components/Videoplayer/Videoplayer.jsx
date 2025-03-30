import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/college-video.mp4' 

const videoplayer = ({playState,setPlayState}) => {
    const player =useRef(null);
    const closePlayer =(e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState? '': 'hide'}`} ref={player} onClick={closePlayer} >
      <video src={video} autoPlay muted controls></video>     
    </div>
  )
}

export default videoplayer
