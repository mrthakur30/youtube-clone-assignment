import { useEffect, useState } from "react";
import axios from "axios";
import { PlayingVideoContext } from "../lib/context";
import { useContext } from "react";
import VideoTab from "./VideoTab";
import Card from "./Card";

function Home() {
const {currentVideo , setCurrentVideo} = useContext(PlayingVideoContext);
  const [page, setPage] = useState(0);
  const [videosData, setVideosData] = useState(null);
  useEffect(() => {
    const getVideosData = async () => {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      const items = response.data.data.posts;
      const videos = items.map((item) => {
        return {
          id: item.postId,
          creatorId: item.creator.handle,
          creatorImgURL: item.creator.pic,
          title: item.submission.title,
          description: item.submission.description,
          videoURL: item.submission.mediaUrl,
          thumbnailURL: item.submission.thumbnail,
        };
      });

      setVideosData(videos);
    };
    getVideosData();
  }, [page]);
  
 console.log(videosData);
  return (
    <>
     {currentVideo ? 
     <VideoTab 
     key={currentVideo.id}
     creatorId={currentVideo.creatorId}
     creatorImgURL={currentVideo.creatorImgURL}
     title={currentVideo.title}
     description={currentVideo.description}
     videoURL={currentVideo.videoURL}
     /> :
     
    <div className=" h-screen bg-slate-100 ">
    <div className="flex  flex-row">
      <button
        onClick={() => setPage(page -1)}
        className="mx-2 bg-red-500 hover:text-slate-700 hover:text-2xl transition text-xl"
      >
        {"<"}
      </button>
      <p className="text-xl">{" " + (page + 1) + " "} of 10</p>
      <button
        onClick={() => setPage(page + 1)}
        className="mx-2 bg-red-500 hover:text-slate-700 hover:text-2xl transition text-xl"
      >
        {">"}
      </button>
    </div>
    <div className=" h-full mx-8  items-center grid md:grid-cols-3 grid-cols-1 space-around ">
      {videosData &&
        videosData.map((item,index) => {
          return (
           <div onClick={()=>setCurrentVideo(item)}>
            <Card
              id={index}
              key={item.id}
              creatorId={item.creatorId}
              creatorImgURL={item.creatorImgURL}
              title={item.title}
              description={item.description}
              videoURL={item.videoURL}
              thumbnailURL={item.thumbnailURL}
            />
            </div>
          );
        })}
        
    </div>
  </div>
     }
    </>
  );
}





export default Home;
