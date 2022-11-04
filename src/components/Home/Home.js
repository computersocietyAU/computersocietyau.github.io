import { useRouter } from '@tanstack/react-location';
import React from 'react';
import Footer from '../Footer/Footer';

const Home = () => {

  const router = useRouter()

  if(router.pending){
    return(
      <div class="flex items-center justify-center space-x-2 animate-pulse h-screen w-screen">
        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin text-navSpecial"></div>
      </div>
    )
  }

  return (
    <main id="home" className="h-[100vh]">
      <section
        className="w-[100vw] overflow-hidden h-[102vh] flex justify-center items-center relative"
        id="landing"
      >
        <figure className="font-landingText block relative">
          <img
            className="w-[400px] md:w-[500px] lg:w-[650px] h-[200px] md:h-[230px] lg:h-[320px]"
            src="/logo.png"
            alt="csau-logo"
          />
          <figcaption className="absolute top-[58%] left-[42%] text-xl lg:text-3xl tracking-[1px] text-navSpecial">
            A meeting place for ideas
          </figcaption>
        </figure>
        <div className="wave absolute bottom-[-15px] w-[6400px] h-[150px] sm:h-[198px] "></div>
        <div className="wave absolute bottom-[-15px] w-[6400px] h-[150px] sm:h-[198px] "></div>
      </section>
      <section className="w-[100vw] pt-20 pb-16" id="about1">
        <div className="content w-screen my-0 mx-auto px-10">
          <h1 className="py-2.5 mb-10 text-navSpecial text-center text-2xl leading-[25px] md:text-3xl lg:text-[40px] lg:leading-[50px]">
            Who we are ?
          </h1>
          <div className="about-container-one flex items-center justify-evenly flex-wrap gap-[20px] py-[15px]">
            <img
              src="/about1.png"
              alt="about1"
              className="block w-[min(90%,400px)] xlg:w-[min(90%,550px)] h-[230px] md:h-[300px] lg:h-[350px] object-cover"
            />
            <p className="text-justify font-light tracking-[1px] opacity-75 max-w-md md:max-w-xl lg:max-w-2xl text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]">
              Computer Society of Anna University [CSAU] is one of CEG's oldest
              technical clubs, functioning under Ramanujan Computing Centre
              [RCC]. The goal of CSAU is to extend the knowledge of computer
              science beyond the fields of CS and IT. In addition to helping
              students realize their technical interests, the club upskills them
              through knowledge sharing within the peer network. Our team at
              CSAU explores and experiments with new technologies with the goal
              of spreading the knowledge to the network. Bringing together
              peers, juniors, and alumni, we create an informative network to
              raise awareness about current technologies and assist in
              upskilling students. In order to shed light on the latest
              technologies, we conduct a number of events where spokespersons
              from various industries share their knowledge and experiences of
              working with those technologies. In addition to exploring new
              technologies, we are always looking to expand our peer network to
              share knowledge.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[100vw] py-10" id="about2">
        <div className="content w-screen my-0 mx-auto px-10">
          <h1 className="py-2.5 mb-10 text-navSpecial text-center text-2xl leading-[25px] md:text-3xl lg:text-[40px] lg:leading-[50px]">
            What we do ?
          </h1>
          <div className="about-container-two flex items-center justify-evenly flex-wrap gap-[20px] py-[15px] flex-row-reverse">
            <img
              src="/about2.png"
              alt="about2"
              className="block w-[min(90%,400px)] xlg:w-[min(90%,550px)] h-[230px] md:h-[300px] lg:h-[350px] object-cover"
            />
            <span className="text-justify font-light tracking-[1px] opacity-75 max-w-md md:max-w-xl lg:max-w-2xl text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]">
              <p>
              The Computer Society of Anna University strives to bring together students from across departments together to communally support each other’s growth in various technical domains. 
              The club regularly meets up to conduct workshops on multiple and engages its audience through technical articles, posts, and technical trivia on social media platforms. 
              CSAU also prides itself in having conducted bootcamps on skills that make students industry-ready such as “Data Hack” for Artificial Intelligence (AI), Web Dev Bootcamp etc. 
              The “100 Days of Code” was one such series where competitive coding aspirants followed up on each other’s work for a duration of 100 days – thus creating a conducive learning space. 
              The club aims to repeatedly upgrade itself with more engaging content and events that benefit the student community. CSAU thus hopes to continue nurturing a growing community of tech enthusiasts within the college.
              </p>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;