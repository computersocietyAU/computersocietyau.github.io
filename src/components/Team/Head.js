import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Head = ({ details }) => {
  return (
    <div className="px-5">
        <div className="glassIco w-[250px] min-h-[300px] mx-auto pt-8 flex flex-col justify-start items-center relative">
        <img src={"/profile.jpg"} alt="head" className="w-[100px] h-[100px] rounded-[50%] object-contain border-solid border-2 border-imgBorder" />
        <div className="mt-2 text-center">
            <p className="my-1 tracking-[1px]">{details.name}</p>
            <p className="my-1 tracking-[1px]">{details.info}</p>
            <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
            <FaLinkedin className="inline" size="1.1em" />
            </a>
            <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
            <FiMail className="inline" size="1.1em" />
            </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 domain text-center py-3">
            <p className="font-bold">{details.domain}</p>
        </div>
        </div>
    </div>
  )
}

export default Head;