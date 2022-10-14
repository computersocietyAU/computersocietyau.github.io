import React, { useEffect, useState } from "react";
import our_team from "./images/OUR-TEAM.png";
import presidents from "./images/Presidents.png";
import domain_heads from "./images/Domain-Heads.png";
import core_members from "./images/Core-Members.png";
import logo from "./images/LOGO.png";
import { Presidents, Core_Members1, Core_Members2, Domain_Heads } from "./Data";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import client from "../../client";
import { useMatch } from "@tanstack/react-location";

const Member = ({member}) => {
  return(
  <div className="rounded-full my-4 gap-2 tab:w-40 tab:h-40 2k:w-96 2k:h-96 2k:gap-10 2k:m-10   text-sm w-28 h-28 k:w-56 k:h-56 xl:w-64 xl:h-64 flex k:text-2xl k:my-1 tab:my-0.5 flex-col group relative overflow-hidden transition-all  ">
  <img
    src={`https://imgs.search.brave.com/ge44VjZGPCQ5w7tNunuCbIZGSSMU0l4-ChYv2YVde4c/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/clNDOWVORGtEbFZJ/MG9mWU9uczJnSGFI/YSZwaWQ9QXBp`}
    className=" scale-125 group-hover:blur-sm group-hover:brightness-75 group-hover:scale-100 font-pop  transition-all rounded-full h-full  w-full  "
  ></img>
  <div className=" absolute invisible group-hover:visible 2x:m-10 lg:text-xl -translate-x-2/4 flex  flex-col   -translate-y-2/4 top-2/4 left-2/4 text-white">
    <h1 className=" text-center k:text-2xl 2k:text-3xl 2k:m-4 tab:text-xs tab:m-2 ">
      {member.name}
    </h1>
    <h1 className="text-center k:text-xl  m-2 2k:text-3xl 2k:m-4 tab:text-xs tab:m-3">
      {`CSE ${member.year}`}
    </h1>
    <div className="flex justify-center gap-2 my-1 2k:text-5xl k:gap-3 k:mb-4 k:mt-3 k:mx-3 k:text-2xl tab:text-xs">
      <a href={member.lnurl}>
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>
)}

const Team = () => {

  const {data:{team}} = useMatch()

  return (
    <div>
      <br></br>
      <br></br>
      <img
        src={logo}
        className=" mr-0 mt-6  w-48 h-32 mob:mt-12 k:mt-0 lg:w-fit lg:h-fit "
      ></img>
      <div className="flex flex-col py-10 ">
        <img
          src={our_team}
          className=" mb-6 mt-10 w-4/5 lg:w-fit lg:h-fit mx-auto"
        ></img>
        <br></br>
        <img
          src={presidents}
          className=" my-6 w-2/5 mx-auto lg:my-7 text-center"
        ></img>
        <div className="flex justify-center gap-12 my-5">
          {team.map((i)=>{
            if(i.designation=="President"){
              return <Member member={i}/>
            }
          })}
        </div>
        <img
          src={domain_heads}
          className=" w-2/5    mx-auto mb-12 mt-10 text-center"
        ></img>
        <div className="flex gap-2 space-x-2 lg:my-5 justify-center lg:gap-12 ">
          {team.map((i)=>{
            if(i.designation=="Domain Head"){
              return <Member member={i}/>
            }
          })}
        </div>
        <img
          src={core_members}
          className=" w-2/5  mt-12   mx-auto lg:my-7  text-center"
        ></img>
        <div className="flex gap-2 space-x-2  my-10 lg:my-5 justify-center relative lg:gap-12 ">
          {Core_Members1.map((i) => {
            return (
              <div className="rounded-full my-4  k:text-xl tab:w-40 tab:h-40 tab:text-xs text-tiny 2k:w-96 2k:h-96 2k:gap-10 2k:m-10 2k:text-3xl xl:w-96 xl:h-96  w-20 h-20 k:w-56 k:h-56  flex  flex-col group relative overflow-hidden transition-all  ">
                <img
                  src={i.pic}
                  className=" scale-125 group-hover:blur-sm group-hover:brightness-75 group-hover:scale-100 font-pop  transition-all rounded-full h-full  w-full  "
                ></img>
                <div className=" absolute invisible group-hover:visible -translate-x-2/4 flex flex-col   -translate-y-2/4 top-2/4 left-2/4 text-white">
                  <h1 className=" text-center m-0.5 2k:m-4 tab:m-1">
                    {i.name}
                  </h1>
                  <h1 className="text-center m-0.5  k:m-2 2k:m-4 tab:m-1">
                    CSE {i.year}
                  </h1>
                  <h1 className="text-center m-0.5 k:m-2 2k:m-4 tab:m-1">
                    {i.Domain}
                  </h1>
                  <div className="flex justify-center gap-2 my-1 k:gap-3 k:mb-4 k:mt-3 k:mx-3 k:text-2xl">
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex mb-2 space-x-2  gap-2 lg:my-5 justify-center lg:gap-12  ">
          {Core_Members2.map((i) => {
            return (
              <div className="rounded-full my-4 k:text-xl tab:w-40 tab:h-40 tab:text-xs text-tiny 2k:w-96 2k:h-96 2k:gap-10 2k:m-10 2k:text-3xl xl:w-96 xl:h-96  w-20 h-20 k:w-56 k:h-56  flex  flex-col group relative overflow-hidden transition-all  ">
                <img
                  src={i.pic}
                  className=" scale-125 group-hover:blur-sm group-hover:brightness-75 group-hover:scale-100 font-pop  transition-all rounded-full h-full  w-full  "
                ></img>
                <div className=" absolute invisible group-hover:visible -translate-x-2/4 flex flex-col   -translate-y-2/4 top-2/4 left-2/4 text-white">
                  <h1 className=" text-center m-0.5 2k:m-4 tab:m-1">
                    {i.name}
                  </h1>
                  <h1 className="text-center m-0.5  k:m-2 2k:m-4 tab:m-1">
                    CSE {i.year}
                  </h1>
                  <h1 className="text-center m-0.5 k:m-2 2k:m-4 tab:m-1">
                    {i.Domain}
                  </h1>
                  <div className="flex justify-center gap-2 my-1 k:gap-3 k:mb-4 k:mt-3 k:mx-3 k:text-2xl">
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
