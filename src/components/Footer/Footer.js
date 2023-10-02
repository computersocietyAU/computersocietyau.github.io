import { Link } from "@tanstack/react-location";
import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const Footer = () => {
  const [body, setBody] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const email = "cegcsau@gmail.com";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setIsSuccess(false);
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    if (userEmail.trim() === "") {
      setIsSubmitting(false);
      setErrorMsg("Please enter your email");
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      return;
    }
    if (body.trim() === "") {
      setIsSubmitting(false);
      setErrorMsg("Please enter a message");
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      return;
    }

    const templateParams = {
      to_email: email,
      from_name: userEmail,
      message: body,
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setBody("");
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        setErrorMsg("Error sending the message. Please try again.");
        setIsSuccess(false);
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again later.");
      setIsSuccess(false);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }

    setIsSubmitting(false);
  };

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
            <input
              type="text"
              placeholder="Your Email"
              autoComplete="off"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="bg-navbarBg py-4 px-2.5 h-9 w-[300px] font-linksText text-inputColor text-sm outline-none border-none rounded-md"
            />
            <textarea
              placeholder="Get in touch with us"
              cols="20"
              rows="5"
              autoComplete="off"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="bg-navbarBg w-[300px] my-5 font-linksText text-inputColor text-sm outline-none border-none rounded-md p-[10px] resize-none"
            ></textarea>
            <button
              onClick={(e) => onSubmit(e)}
              className={`bg-navSpecial w-[300px] font-linksText text-black text-sm outline-none rounded-md p-[10px] tracking-[1px] cursor-pointer border-[1px] border-inputBorder border-solid ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
            {errorMsg && (
              <div className="border px-4 py-2 rounded mt-2 text-center">
                <p className="text-sm">{errorMsg}</p>
              </div>
            )}
            {isSuccess && (
              <div className="border px-4 py-2 rounded mt-2 text-center">
                <p className="text-sm">Message sent successfully!</p>
              </div>
            )}
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
