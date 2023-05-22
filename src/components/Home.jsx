import { useEffect, useState } from "react";
import axios from "axios";
import { PlayingVideoContext } from "../lib/context";
import { useContext } from "react";
import VideoTab from "./VideoTab";
import Card from "./Card";

function Home() {
  const { currentVideo, setCurrentVideo } = useContext(PlayingVideoContext);
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
        <div className=" h-full bg-slate-100 flex flex-col  items-center ">

          <div className="flex bg-slate-100/20 z-50 shadow-sm backdrop-filter backdrop-blur-xl  w-full  justify-center  py-4 fixed flex-row">
            <button
              onClick={() => setPage(page - 1)}
              className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
            >
              ← Previous
            </button>
            <p className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
              {" " + (page + 1) + " "} of 10
            </p>
            <button
              onClick={() => setPage(page + 1)}
              className="mx-2 text-sm font-semibold text-gray-900"
            >
              Next →
            </button>
          </div>

          <div className=" h-full md:mx-8 mx-5 mt-24 items-center  grid md:grid-cols-3   grid-cols-1 gap-7 ">
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
    </>
  );
}

export default Home;
