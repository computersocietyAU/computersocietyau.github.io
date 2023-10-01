import React, { useEffect, useState } from "react";
import Subheading from "./Subheading/Subheading";
import Yearheading from "./YearHeading/YearHeading";
import EventCards from "./EventCards/EventCards";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMatch, useRouter } from "@tanstack/react-location";
import "swiper/css/bundle";
import Footer from "../Footer/Footer";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

function Events() {
  const { data } = useMatch();
  const year_wise_data = data?.events?.reduce((acc, item) => {
    let d = new Date(item.date);
    let fullYear = d.getFullYear();
    if (!acc[fullYear]) {
      acc[fullYear] = [];
    }
    acc[fullYear].push(item);
    return acc;
  }, {});
  const sortedYears = Object.keys(year_wise_data).sort().reverse();
  console.log(data);

  const router = useRouter();

  if (router.pending) {
    return (
      <div class="flex items-center justify-center space-x-2 animate-pulse h-screen w-screen">
        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin text-navSpecial"></div>
      </div>
    );
  }

  const changeDateFormat = (date) => {
    if (!date) return;
    let convertedDate = date.substring(0, 10);
    let dateArray = convertedDate.split("-");
    let year = dateArray[0];
    let month = dateArray[1];
    let day = dateArray[2];
    convertedDate = day + "-" + month + "-" + year;
    return convertedDate;
  };

  return (
    <div className="events-page">
      {data?.upcomingEvents?.length != 0 ? (
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
            <div id="gallery_image_container">
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
                      //onClick={() => handleViewerClick(index)}
                    />
                  </SwiperSlide>
                )
              )}
            </div>
          </Swiper>
        </div>
      ) : (
        <div className="pb-[4rem]"></div>
      )}
      <div className="pt-[3rem]">
        <Subheading title="Our Events" />
        {sortedYears?.map((year, ind) => {
          let x = `gallery_image_container_${year}`;
          return (
            <div key={ind}>
              <Yearheading title={year} />
              <div id={x}>
                {year_wise_data[year]?.map(
                  (
                    { title, mainImage, description, date, location, eventPics },
                    index
                  ) => (
                   <div id={title} key={index}>
                    <EventCards
                        key={index}
                          title={title}
                          coverImage={mainImage.asset.url}
                          description={description[0].children[0].text} // change to block content in sanity
                          date={changeDateFormat(date)}
                          location={location}
                          clickfunc={() => {
                            if (eventPics && eventPics.length > 0) {
                              const images = eventPics.map((pics) => pics.asset.url);
                              console.log(title);
                              let galleryViewer = new Viewer(
                                document.getElementById(title),
                                {
                                  title: [
                                    0,
                                    (coverImage, coverImageData) => ``,
                                  ],
                                }
                              );
                            }
                        }}
                        // buttonText="See pictures ->"
                        background={"rgba(65, 230, 166, 0.3)"}
                        // onClick={() => handleViewerClick(index)}
                      />
                      <div className="hidden">
                      {
                        eventPics!=null && eventPics.map((val,index)=> {
                          return (
                            <img src={val.asset.url}></img>
                          )
                        })
                      }
                    </div>
                   </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
