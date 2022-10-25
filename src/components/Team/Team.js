import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { useMatch } from "@tanstack/react-location";
import Footer from "../Footer/Footer";
import Head from "./Head";

import Slider from "react-slick";
import DeputyHead from "./DeputyHead";
import President from "./President";

const Team = () => {

  const {data:{team}} = useMatch();
  console.log(team);
  
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         autoplaySpeed: 3000,
  //         pauseOnHover: true,
  //       }
  //     }
  //   ]
  // };
  const settings2 = {
    className: "center slider",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    rows: 2,
    slidesPerRow: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings3 = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className="pt-[6em] px-7">
      <div className='text-white font-main font-bold text-[20px] mb-5 xlg:text-[30px] text-center uppercase flex justify-center'>
        <p className='w-fit border-white border-t-[5px] border-b-[5px]'>Presidents</p>
      </div>
      <div className="flex justify-center items-center gap-4 gap-x-10 my-7 mb-14 flex-wrap">
        {
          team.map(t=>{
            if(t.designation=="President"){
              return <President president={t}/>
            }
          })
        }
      </div>
      <div className='text-white font-main font-bold text-[20px] mb-5 xlg:text-[30px] text-center uppercase flex justify-center'>
        <p className='w-fit border-white border-t-[5px] border-b-[5px]'>Heads</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-8 gap-y-3 gap-x-8">
        {
          team.map(t=>{
            if(t.designation=="Domain Head"){
              return <Head head={t}/>
            }
          })
        }
      </div>
      <div className='text-white font-main font-bold text-[20px] xlg:text-[30px] text-center uppercase flex justify-center mt-12 mb-5'>
        <p className='w-fit border-white border-t-[5px] border-b-[5px]'>Deputy Heads</p>
      </div>
      <div className="hidden xl:block w-[min(90%,1200px)] m-auto py-5" id="slider2">
        <Slider {...settings2}>
          {
            team.map(t=>{
              if(t.designation=="Deputy Head"){
                return <DeputyHead dhead={t}/>
              }
            })
          }
        </Slider>
      </div>
      <div className="block xl:hidden w-[min(90%,1200px)] m-auto py-5">
        <Slider {...settings3}>
          {
            team.map(t=>{
              if(t.designation=="Deputy Head"){
                return <DeputyHead dhead={t}/>
              }
            })
          }
        </Slider>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Team;
