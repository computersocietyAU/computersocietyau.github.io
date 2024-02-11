import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const Head = ({ head }) => {
  return (
    <div className="p-2 transition ease-in-out hover:scale-105 duration-200  jusitify-content: center ">
      <div className="glassIco min-h-[300px] pt-8 flex flex-col justify-start items-center relative">
        <div className='img'>
          <img
            src={`/team/${head.name}.jpg`}
            alt="head" />
        </div>
        <div className="mt-2 text-center">
          <p className="my-1 tracking-[1px]">{head.name}</p>
          <p className="my-1 tracking-[1px]">{`${head.year} year, ${head.department} dept`}</p>
          <a href={head.lnurl} target="_blank" rel="noreferrer" className="mx-2">
            <FaLinkedin className="inline" size="1.1em" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 domain text-center py-3 ">
          <p className="font-bold">{head.domain}</p>
        </div>
      </div>
    </div>
  )
}

export default Head;