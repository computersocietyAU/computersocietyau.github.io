import React, { useState } from 'react';
import handleViewport from 'react-in-viewport';

const Block = (props) => {
  const { forwardedRef } = props;
  return (
    <div className="viewport-block" ref={forwardedRef}>
    <section className='w-[100vw] min-h-[100vh] py-28 snap-start snap-normal' id='about1'>
      <div className='content w-[min(90%,1250px)] my-0 mx-auto'>
        <h1 className='py-2.5 text-navSpecial text-center text-2xl leading-[25px] md:text-3xl lg:text-[40px] lg:leading-[50px]'>
          Who we are ?
        </h1>
        <div className='about-container-one flex items-center justify-around flex-wrap gap-[20px] py-[15px]'>
          <img src='/about1.png' alt='about1' 
            className='block w-[min(90%,400px)] xlg:w-[min(90%,550px)] h-[230px] md:h-[300px] lg:h-[350px] object-cover' 
          />
          <p className='text-justify font-light tracking-[1px] opacity-75 max-w-[350px] md:max-w-[500px] lg:max-w-[600px] text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
            Computer Society of Anna University is a student club functioning under the Ramanujan Computing Centre, Anna University. 
            With the prestige of being one of the oldest technical clubs of CEG, the club aims at bringing the students together to grow 
            through knowledge sharing and to make them realize their potential and nourish it.
          </p>
        </div>
      </div>
    </section>
    <section className='w-[100vw] min-h-[100vh] py-28 snap-start snap-normal' id='about2'>
      <div className='content w-[min(90%,1250px)] my-0 mx-auto'>
        <h1 className='py-2.5 text-navSpecial text-center text-2xl leading-[25px] md:text-3xl lg:text-[40px] lg:leading-[50px]'>
          What we do ?
        </h1>
        <div className='about-container-two flex items-center justify-around flex-wrap gap-[20px] py-[15px] flex-row-reverse'>
          <img src='/about2.png' alt='about2' 
            className='block w-[min(90%,400px)] xlg:w-[min(90%,550px)] h-[230px] md:h-[300px] lg:h-[350px] object-cover' 
          />
          <p className='text-justify font-light tracking-[1px] opacity-75 max-w-[350px] md:max-w-[500px] lg:max-w-[600px] text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
            We at CSAU work towards disseminating knowledge about technology. We bring together the knowledge and co-operation of peers, juniors and 
            alumni to create an informative network and help in upskilling. Various events has been 
            organised as student initiatives throughout the year where various spokespersons from the industry have been invited to shed light upon the students to nurture their wisdom. 
          </p>
        </div>
      </div>
    </section>
    <section className='w-[100vw] min-h-[100vh] pt-28 pb-32 flex justify-center items-center flex-col snap-start snap-normal' id='contact'>
      <div className='contact-container flex flex-col xlg:flex-row justify-center xlg:justify-between items-center mx-auto flex-wrap pr-[15px]] xlg:pr-[60px] pl-7px w-[min(90%,1100px)]'>
        <img src='/logo.png' alt='contact-logo'
          className='block object-contain w-[200px] h-[200px] xlg:w-[250px] xlg:h-[250px] xlg:mr-[50px]'
        />
        <div className='flex flex-wrap flex-col-reverse xlg:flex-row justify-center xlg:justify-between items-center flex-1 xlg:flex-[0.9] lg:flex-[0.8] mt-[-30px] xlg:mt-0'>
          <form id='contact-form' className='flex flex-col align-center justify-around my-[20px] xlg:my-0'>
            <input type="text" placeholder="Email Address" autoComplete='off' required 
              className='bg-formInput py-4 px-2.5 h-9 w-[300px] font-linksText text-inputColor text-sm outline-none border-none rounded-md'
            />
            <textarea placeholder='Get in touch with us' cols="20" rows="5" autoComplete='off' required
              className='bg-inputBg w-[300px] h-[85px] font-linksText text-inputColor text-sm outline-none border-none rounded-md my-[10px] p-[10px] resize-none'
            >
            </textarea>
            <button type='submit'
              className='bg-buttonBg w-[300px] font-linksText text-inputColor text-sm outline-none rounded-md p-[10px] tracking-[1px] cursor-pointer border-[1px] border-inputBorder border-solid'
            >
              SEND MESSAGE
            </button>
          </form>
          <ul className='list-none'>
            <li>
              <a href='/' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
              Home
              </a>
            </li>
            <li>
              <a href='/events' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                Events
              </a>
            </li>
            <li>
              <a href='/blogs' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                Blogs
              </a>
            </li>
            <li>
              <a href='/team' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className='my-[30px] w-[min(90%,1200px)]'>
        <hr className='w-[min(90%,1200px)] mx-auto bg-footerRule opacity-75 border-[0.5px] border-footerBorder border-solid' />
        <div className='w-[min(90%,1200px)] my-[20px] mx-auto flex items-center justify-between flex-wrap'>
          <p className='font-linksText text-[12px] sm:text-sm tracking-[1px] opacity-[0.75]'>
            Copyright 2022 CSAU
          </p>
          <div className='social flex items-center'>
            <a href='https://www.facebook.com/csau.ceg/'>
              <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/facebook.png' alt='social' />
            </a>
            <a href='https://www.instagram.com/csau_ceg/'>
              <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/instagram.png' alt='social' />
            </a>
            <a href='https://www.linkedin.com/school/computer-society-of-anna-university/'>
              <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/linkedin.png' alt='social' />
            </a>
          </div>
        </div>
      </footer>
    </section>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const Home = () => {
  const [waves, setWaves] = useState(true);

  return (
    <main id='home' className='h-[100vh] overflow-scroll overflow-x-hidden relative snap-y snap-mandatory scroll-pt-0'>
      {waves ?
          <>
          <div className="wave fixed bottom-[-15px] w-[6400px] h-[150px] sm:h-[198px]"></div>
          <div className="wave fixed bottom-[-50px] w-[6400px] h-[150px] sm:h-[198px]"></div>
          </> :
          <></>
      }
      <section className='w-[100vw] h-[102vh] flex justify-center items-center snap-start snap-normal' id='landing'>
        <figure className='font-landingText block relative'>
          <img className='w-[400px] md:w-[500px] lg:w-[650px] h-[200px] md:h-[230px] lg:h-[320px]' 
            src='/logo.png' alt="csau-logo" 
          /> 
          <figcaption className='absolute top-[58%] left-[42%] text-lg md:text-xl lg:text-3xl tracking-[1px] text-navSpecial'>
            A meeting place for ideas
          </figcaption>
        </figure>
      </section>
      <ViewportBlock onEnterViewport={() => {console.log("entered"); setWaves(false)}} onLeaveViewport={() => { console.log("left"); setWaves(true)}} />
    </main>
  )
};

export default Home;