import React from 'react';

const Home = () => {
  return (
    <main id='home'>
      <section className='w-full min-h-[100vh] flex justify-center items-center' id='landing'>
        <figure className='font-landingText block relative'>
          <img className='w-[400px] md:w-[500px] lg:w-[650px] h-[200px] md:h-[230px] lg:h-[320px]' 
            src='/logo.png' alt="csau-logo" 
          /> 
          <figcaption className='absolute top-[58%] left-[42%] text-lg md:text-xl lg:text-3xl tracking-[1px] text-navSpecial'>
            A meeting place for ideas
          </figcaption>
        </figure>
      </section>
      <section className='w-full min-h-[100vh] py-28' id='about1'>
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
      <section className='w-full min-h-[100vh] py-28' id='about2'>
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
      <div className="wave fixed bottom-[-15px] w-[6400px] h-[150px] sm:h-[198px]"></div>
        <div className="wave fixed bottom-[-50px] w-[6400px] h-[150px] sm:h-[198px]"></div>
        <div className='background fixed inset-0 z-[-1] bg-no-repeat bg-center bg-cover'>
        </div>
    </main>
  )
};

export default Home;