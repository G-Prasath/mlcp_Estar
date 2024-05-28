import React from "react";
import ReactPlayer from "react-player";

const Videogrid = () => {
  const vidList = [
    {
      "videoSrc" : "Estar-Products",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque soluta exercitationem voluptatibus."
    },
    {
      "videoSrc" : "estarcorporate",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque soluta exercitationem voluptatibus."
    },
        {
      "videoSrc" : "TCS-Chromepet",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque soluta exercitationem voluptatibus."
    },
        {
      "videoSrc" : "tcs-thiruppur",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque soluta exercitationem voluptatibus."
    },

  ];

  return (
    <div className="mt-8 w-full grid grid-cols-2 gap-10 max-md:gap-5 max-lg:grid-cols-1 sec-padding overflow-hidden">
      {vidList.map((item, index) => (
        <div className="w-full aspect-video" key={index}>
          <ReactPlayer
            controls={true}
            url={`/videos/${item.videoSrc}.mp4`}
            width="full"
            height="auto"
          />
          <p className="my-5 text-center max-md:text-justify">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Videogrid;
