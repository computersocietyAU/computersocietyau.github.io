import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function President({president}) {
  return (
    <div className="president-card w-[min(90%,450px)] min-h-[230px] rounded-xl p-3 flex justify-center items-center transition ease-in-out duration-200 hover:scale-105">
      <div className="bg-cardBg flex justify-center items-center flex-wrap gap-x-6 gay-y-3 py-4 px-8 rounded-lg">
        <img
          src={president.image?.asset?.url}
          alt="president-img"
          className="block w-[125px] h-[125px] rounded-[50%] object-cover shadow-xl"
        />
        <div className="text-center">
          <p className="my-2 tracking-[0.3px] md:tracking-[1px]">{president.name}</p>
          <p className="my-2 tracking-[0.3px] md:tracking-[1px]">{`${president.year} year, ${president.department} dept`}</p>
          <a href={president.lnurl} target="_blank" rel="noreferrer" className="mx-2">
            <FaLinkedin className="inline" size="1.1em" />
          </a>
        </div>
      </div>
    </div>
  );
}
