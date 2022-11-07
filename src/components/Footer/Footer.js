import { Link } from '@tanstack/react-location';
import React,{useState} from 'react';

const Footer = () => {

  const [body,setBody] = useState('')
  const email = "cegcsau@gmail.com"

  function sendMessage(e){
    e.preventDefault();
    if(body.length>0){
      let mailLink = 'mailto:'+email+'?subject=Message to CSAU'+'&body='+body
      window.location.href = mailLink
    }
    else{
      alert("Please enter a message")
    }
  }
  return (
    <section
      className="w-[100vw] pt-10 pb-3 flex justify-center items-center flex-col"
      id="contact"
    >
      <div className="contact-container flex flex-col xlg:flex-row justify-center xlg:justify-between items-center mx-auto flex-wrap pr-[15px]] xlg:pr-[60px] pl-7px w-[min(90%,1100px)]">
        <img
          src="/logo.png"
          alt="contact-logo"
          className="block object-contain w-[200px] h-[200px] xlg:w-[250px] xlg:h-[250px] xlg:mr-[50px]"
        />
        <div className="flex flex-wrap flex-col-reverse xlg:flex-row justify-center xlg:justify-between items-center flex-1 xlg:flex-[0.9] lg:flex-[0.8] mt-[-30px] xlg:mt-0">
          <form
            id="contact-form"
            className="flex flex-col align-center justify-around my-[20px] xlg:my-0"
          >
            {/* <input
              type="text"
              placeholder="Email Address"
              autoComplete="off"
              required
              className="bg-navbarBg py-4 px-2.5 h-9 w-[300px] font-linksText text-inputColor text-sm outline-none border-none rounded-md"
            /> */}
            <textarea
              placeholder="Get in touch with us"
              cols="20"
              rows="5"
              autoComplete="off"
              value={body}
              onChange={(e)=>setBody(e.target.value)}
              required
              className="bg-navbarBg w-[300px] my-5 font-linksText text-inputColor text-sm outline-none border-none rounded-md p-[10px] resize-none"
            ></textarea>
            <button
              onClick={(e)=>sendMessage(e)}
              className="bg-navSpecial w-[300px] font-linksText text-black text-sm outline-none rounded-md p-[10px] tracking-[1px] cursor-pointer border-[1px] border-inputBorder border-solid"
            >
              SEND MESSAGE
            </button>
          </form>
          <ul className="list-none text-navSpecial">
            <li>
              <Link
                to="/"
                className="block my-[15px] opacity-[0.85] tracking-[1px]"
              >
                <span className="cursor-pointer hover:text-gray-300 text-white">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="block my-[15px] opacity-[0.85] tracking-[1px]"
              >
                <span className="cursor-pointer hover:text-gray-300 text-white">
                  Events
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block my-[15px] opacity-[0.85] tracking-[1px]"
              >
                <span className="cursor-pointer hover:text-gray-300 text-white">
                  Blogs
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block my-[15px] opacity-[0.85] tracking-[1px]"
              >
                <span className="cursor-pointer hover:text-gray-300 text-white">
                  Team
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <footer className="my-[30px] w-[min(90%,1200px)]">
        <hr className="w-[min(90%,1200px)] mx-auto bg-footerRule opacity-75 border-[0.5px] border-footerBorder border-solid" />
        <div className="w-[min(90%,1200px)] my-[20px] mx-auto flex items-center justify-between flex-wrap">
          <p className="font-linksText text-[12px] sm:text-sm tracking-[1px] opacity-[0.75]">
            Copyright 2022 CSAU
          </p>
          <div className="social flex items-center">
            <a href="https://twitter.com/csau_ceg">
              <img
                className="block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                src="/twitter.png"
                alt="social"
              />
            </a>
            <a href="https://www.facebook.com/csau.ceg/">
              <img
                className="block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                src="/facebook.png"
                alt="social"
              />
            </a>
            <a href="https://www.instagram.com/csau_ceg/">
              <img
                className="block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                src="/instagram.png"
                alt="social"
              />
            </a>
            <a href="https://www.linkedin.com/school/computer-society-of-anna-university/">
              <img
                className="block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                src="/linkedin.png"
                alt="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;