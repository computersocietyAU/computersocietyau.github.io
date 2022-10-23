import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { useMatch } from "@tanstack/react-location";
import Footer from "../Footer/Footer";
import Head from "./Head";

import Slider from "react-slick";
import DeputyHead from "./DeputyHead";

const Team = () => {

  const {data:{team}} = useMatch();
  console.log(team);
  
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        }
      }
    ]
  };
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
        <div className="president-card w-[min(90%,450px)] min-h-[230px] rounded-xl p-3 flex justify-center items-center">
            <div className="bg-cardBg flex justify-center items-center flex-wrap gap-x-6 gay-y-3 py-4 px-8 rounded-lg">
              <img src="/profile.jpg" alt="president-img" className="block w-[125px] h-[125px] rounded-[50%] object-contain" />
              <div className="text-center">
                <p className="my-2 tracking-[1px]">Vishnu Vasan R</p>
                <p className="my-2 tracking-[1px]">4th year, IT dept</p>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FaLinkedin className="inline" size="1.1em" />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FaInstagram className="inline" size="1.1em" />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FiMail className="inline" size="1.1em" />
                </a>
              </div>
            </div>
        </div>
        <div className="president-card w-[min(90%,450px)] min-h-[230px] rounded-xl p-3 flex justify-center items-center">
            <div className="bg-cardBg flex justify-center items-center flex-wrap gap-x-6 gay-y-3 py-4 px-8 rounded-lg">
              <img src="/profile.jpg" alt="president-img" className="block w-[125px] h-[125px] rounded-[50%] object-contain" />
              <div className="text-center">
                <p className="my-2 tracking-[1px]">Ishwarya S</p>
                <p className="my-2 tracking-[1px]">4th year, CSE dept</p>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FaLinkedin className="inline" size="1.1em" />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FaInstagram className="inline" size="1.1em" />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-vasan-r/" className="mx-2">
                  <FiMail className="inline" size="1.1em" />
                </a>
              </div>
            </div>
        </div>
      </div>
      <div className='text-white font-main font-bold text-[20px] mb-5 xlg:text-[30px] text-center uppercase flex justify-center'>
        <p className='w-fit border-white border-t-[5px] border-b-[5px]'>Heads</p>
      </div>
      <div className="w-[min(90%,700px)] m-auto py-5">
        <Slider {...settings}>
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
          <Head details={{name: 'Aswin Menon', info: '4th year, CSE dept', domain: 'Web & App'}} />
        </Slider>
      </div>
      <div className='text-white font-main font-bold text-[20px] xlg:text-[30px] text-center uppercase flex justify-center mt-12 mb-5'>
        <p className='w-fit border-white border-t-[5px] border-b-[5px]'>Deputy Heads</p>
      </div>
      <div className="hidden xl:block w-[min(90%,1200px)] m-auto py-5" id="slider2">
        <Slider {...settings2} >
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
        </Slider>
      </div>
      <div className="block xl:hidden w-[min(90%,1200px)] m-auto py-5">
        <Slider {...settings3} >
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
          <DeputyHead details={{name: 'Gautham Kumar', info: '3rd year, CSE dept', domain: 'Web & App'}} />
        </Slider>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Team;
