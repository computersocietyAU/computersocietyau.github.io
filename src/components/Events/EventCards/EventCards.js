import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CalenderIcon from "../Icons/CalenderIcon";
import PlaceIcon from "../Icons/PlaceIcon";

import "./event-card.css";

function EventCards({
  coverImage,
  title,
  description,
  date,
  location,
  background,
  buttonText,
  clickfunc,
}) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [isHovered, setIsHovered] = useState(false);

  const borderStyles = useSpring({
    borderColor: isHovered ? "rgba(255, 255, 255, 0.5)" : "transparent",
  });

  const cardStyles = useSpring({
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      className={`border-2 border-transparent w-screen xlg:w-[90vw] min-h-max py-[2rem] xlg:py-0 pb-[4rem] mx-auto mt-[2rem] mb-[3rem] flex-col xlg:flex-row items-center xlg:items-start justify-evenly xlg:justify-start rounded-2xl flex relative event-card ${isHovered ? "pulsate-border" : ""
        }`}
      style={{ ...borderStyles, background, ...cardStyles }}
      onClickCapture={clickfunc}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-72 max-h-max m-auto flex xlg:justify-center xlg:items-center xlg:px-[2rem] p-5 cursor-pointer">
        <img src={coverImage} alt=" " className="w-48 md:w-72" />
      </div>
      <div className="w-[85%] m-auto xlg:m-0 xlg:block flex flex-col justify-center items-center xlg:w-[65%] py-4">
        <div className="font-bold xlg:text-3xl text-xl my-4 text-center uppercase">
          {title}
        </div>
        <div className="font-medium text-[14px] xlg:text-[17px] leading-7 xlg:pr-8 xlg:pl-0 p-x-[0.5rem] text-justify">
          <p className="pb-5">{truncate(description, 600)}</p>
          <div className="flex xlg:border-0 xlg:block justify-between border-y-[1px] border-y-[#41e6a680] py-2 my-2">
            <div className="xlg:text-lg text-sm flex items-center xlg:gap-4 gap-2 text-start m-2.5 uppercase">
              <CalenderIcon height={30} width={30} />
              <p>{date}</p>
            </div>
            <div className="xlg:text-lg text-sm flex items-center xlg:gap-4 gap-2 text-start m-2.5 uppercase">
              <PlaceIcon height={30} width={30} />
              <p>{location}</p>
            </div>
          </div>
        </div>
        {buttonText ? (
          <button className="static xlg:absolute bottom-[2rem] w-[150px] text-[14px] xlg:text-[16px]   xlg:w-fit right-[1rem] mt-[1rem] xlg:mt-0 mr-0 xlg:mr-[3rem] uppercase bg-[#D9D9D9] text-[#192444] rounded-xl py-[10px] px-[15px] hover:bg-[#41e6a7b7] hover:text-[#d9d9d9] ">
            {buttonText}
          </button>
        ) : null}
      </div>
    </animated.div>
  );
}

export default EventCards;
