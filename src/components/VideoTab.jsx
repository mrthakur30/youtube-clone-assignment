/* eslint-disable react/prop-types */
import { PlayingVideoContext } from "../lib/context";
import { useContext } from "react";

function VideoTab({ title, description, videoURL, creatorId, creatorImgURL }) {
  const { setCurrentVideo } = useContext(PlayingVideoContext);
  return (
    <div className="h-screen  flex flex-col items-center">
      <button
        onClick={() => setCurrentVideo(null)}
        type="button"
        className="mt-4 absolute right-3  rounded-sm border border-red-50 px-2.5 text-[20px] font-semibold hover:text-gray-200 text-red-500 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        X
      </button>

      <div className="h-screen  flex flex-col items-center w-full  rounded-md border ">
        <div className="bg-black  flex flex-col items-center py-2 w-full">
          <video
            className="rounded-md object-cover"
            autoPlay
            width="320"
            height="450"
            controls
          >
            <source src={videoURL} type="video/mp4" />
          </video>
        </div>

        <div className="p-2 ">
          <h1 className="mx-2 text-3xl font-semibold text-gray-900">{title}</h1>
          <div className="flex bg-slate-100 p-1.5 rounded-3xl ml-2  my-3 ">
            <img
              className="inline-block h-12  rounded-full"
              src={creatorImgURL}
              alt="creator"
            />
            <p className="text-2xl px-2 my-auto font-semibold">{creatorId}</p>
          </div>
          <p className="mt-3 bg-slate-200 rounded-t-lg  h-fit  p-2 mx-2 text-md text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default VideoTab;
