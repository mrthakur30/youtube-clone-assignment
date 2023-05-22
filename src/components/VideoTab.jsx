
import { PlayingVideoContext } from "../lib/context";
import { useContext } from "react";

function VideoTab(props) {
  
const {currentVideo , setCurrentVideo} = useContext(PlayingVideoContext);
  return (
    <div className="h-screen">
      <button onClick={()=>setCurrentVideo(null)}>XXXX</button>
      <video autoPlay width="320" height="240" controls>
           <source src={props.videoURL} type="video/mp4" />
      </video>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}
export default VideoTab ;