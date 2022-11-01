import React from 'react'
import Subheading from './Subheading/Subheading';
import EventCards from './EventCards/EventCards';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMatch, useRouter } from '@tanstack/react-location';
import 'swiper/css/bundle';
import Footer from '../Footer/Footer';

function Events() {
  

  const { data } = useMatch();
      
  const router = useRouter()

    if(router.pending){
      return(
        <div class="flex items-center justify-center space-x-2 animate-pulse h-screen w-screen">
          <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin text-navSpecial"></div>
        </div>
      )
    }

    const changeDateFormat = (date) => {
      if(!date) return;
      let convertedDate = date.substring(0, 10);
      let dateArray = convertedDate.split("-");
      let year = dateArray[0];
      let month = dateArray[1];
      let day = dateArray[2];
      convertedDate = day + "-" + month + "-" + year;
      return convertedDate;
    }

    return (
      <div className="events-page">
        <div className="section-bg pt-[14vh] h-fit w-full ">
          <Subheading title="Upcoming Events" />

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={() => {}}
            onSlideChange={() => {}}
          >
            {data?.upcomingEvents?.map(
              ({ title, mainImage, description, date, location }, index) => (
                <SwiperSlide key={index}>
                  <EventCards
                    key={index}
                    title={title}
                    coverImage={mainImage.asset.url}
                    description={description[0].children[0].text} // change to block content in sanity
                    date={changeDateFormat(date)}
                    location={location}
                    buttonText="Register Now !"
                    background={"rgba(25, 36, 68, 0.6)"}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="pt-[3rem]">
          <Subheading title="Our Events" />

          {data?.events?.map(
            ({ title, mainImage, description, date, location }, index) => (
              <EventCards
                key={index}
                title={title}
                coverImage={mainImage.asset.url}
                description={description[0].children[0].text} // change to block content in sanity
                date={changeDateFormat(date)}
                location={location}
                buttonText="See pictures ->"
                background={"rgba(65, 230, 166, 0.3)"}
              />
            )
          )}
        </div>
        <Footer/>
      </div>
    );
}

export default Events