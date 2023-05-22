import { useEffect, useState } from "react";
import axios from "axios";
import { PlayingVideoContext } from "../lib/context";
import { useContext, useReducer } from "react";
import { reducer } from "../lib/reducer";
import VideoTab from "./VideoTab";
import Card from "./Card";
import Loader from "./Loader";
import github from "../assets/github.png"
function Home() {

  const { currentVideo, setCurrentVideo } = useContext(PlayingVideoContext);
  const [state, dispatch] = useReducer(reducer, { page: 1 });
  const [videosData, setVideosData] = useState(null);
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    const getVideosData = async () => {
      setLoader(true);
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${state.page - 1}`
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

      setLoader(false);
    };
    getVideosData();
  }, [state.page]);


  return (

    <main className="">
      {loader && <Loader />}

      {currentVideo ? (

        <VideoTab
          key={currentVideo.id}
          creatorId={currentVideo.creatorId}
          creatorImgURL={currentVideo.creatorImgURL}
          title={currentVideo.title}
          description={currentVideo.description}
          videoURL={currentVideo.videoURL}
        />
      ) : (
        
        <div className=" h-full texture  flex flex-col  items-center ">
          <nav className="flex bg-slate-100/20 z-10 shadow-sm backdrop-filter backdrop-blur-xl  w-full  justify-center  py-4 fixed flex-row">
          <a  href="https://github.com/mrthakur30/youtube-clone-assignment">
          <img
            className="inline-block left-3 absolute h-10 w-10 rounded-full"
            src={github}
            alt="creator"
          />
          </a>
            <button
              onClick={() => dispatch({ type: "DECREMENT" })}
              className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
            >
              ← Previous
            </button>
            <p className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
              {" " + state.page + " "} of 10
            </p>
            <button
              onClick={() => dispatch({ type: "INCREMENT" })}
              className="mx-2 text-sm font-semibold text-gray-900"
            >
              Next →
            </button>
          </nav>

          <div className=" h-full md:mx-8 mx-5 mt-24 items-center rounded-lg p-4 bg-opacity-50 bg-slate-100  grid md:grid-cols-3   grid-cols-1 gap-7 ">
            {videosData &&
              videosData.map((item, index) => {
                return (
                  <div key={item.id} onClick={() => setCurrentVideo(item)}>
                    <Card
                      id={index}
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
      )}
    </main>
  );
}

export default Home;
