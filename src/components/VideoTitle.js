import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center gap-1">
        <button className="bg-white text-black py-2 px-4 text-lg rounded-lg text-center flex items-center justify-between  hover:bg-opacity-70">
          <AiFillCaretRight />
          Play
        </button>
        <button className="bg-gray-400 text-white py-2 px-4 text-lg rounded-lg text-center flex items-center justify-between gap-1 bg-opacity-50 hover:bg-opacity-100">
          <AiOutlineExclamationCircle />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
