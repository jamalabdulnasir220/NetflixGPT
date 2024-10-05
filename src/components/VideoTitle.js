import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-6 md:pt-[15%]  md:px-24 absolute text-white">
      <h1 className="text-xl  md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:py-6 md:flex text-lg w-1/4">{overview}</p>
      <div className="flex items-center gap-1">
        <button className="bg-white text-black py-1 px-2 mt-4 md:mt-0 md:py-2 md:px-4 md:text-lg rounded-lg text-center flex items-center justify-between  hover:bg-opacity-70">
          <AiFillCaretRight className=""/>
          Play
        </button>
        <button className="bg-gray-400 text-white py-2 px-4 text-lg rounded-lg text-center hidden items-center justify-between gap-1 bg-opacity-50 hover:bg-opacity-100  md:flex ">
          <AiOutlineExclamationCircle />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
