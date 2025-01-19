import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-4xl mb-4">{title}</h1>
      <p className="py-4 text-lg w-1/3">{overview}</p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-50">
          ▶️PLAY
        </button>
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          ❕More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
