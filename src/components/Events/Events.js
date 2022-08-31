import React from 'react'
import Subheading from './Subheading/Subheading';
import EventCards from './EventCards/EventCards';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/bundle';
// import './Events.css';

import cover from './EventCards/events-cover-img.png'


const upcomingEvents = [{
    name: "Web Workshop",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"

},
{
    name: "Web Workshop 2",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"

}, {
    name: "Web Workshop 3",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"

}]

const events = [{
    name: "Web Workshop 0",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"
},
{
    name: "Web Workshop 9",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"
},
{
    name: "Web Workshop 8",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"
},
{
    name: "Web Workshop 7",
    cover: cover,
    desc: "Web development is an interesting and evergreen area many people want to try their hands on. CSAU conducted a 1-day workshop on Angular JS demonstrating how to develop a simple website. The attendees had a take away of a deep understanding and knowledge after a hands-on session on the same",
    date: "11 feb",
    place: "Virtual"
}]

function Events() {


    return (
        <div className='events-page'>
            <div className="section-bg pt-[14vh] h-fit w-full ">
                <Subheading title="Upcoming Events" />

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={() => { }}
                    onSlideChange={() => { }}
                >
                    {upcomingEvents.map(({ name, cover, desc, date, place }, index) => (
                        <SwiperSlide key={index} ><EventCards name={name} cover={cover} desc={desc} date={date} place={place} btn="Register Now !" background={'rgba(25, 36, 68, 0.6)'} /></SwiperSlide>
                    ))}

                </Swiper>

            </div>
            <div className='pt-[3rem]'>
                <Subheading title="Our Events" />

                {events.map(({ name, cover, desc, date, place }, index) => (<EventCards key={index} name={name} cover={cover} desc={desc} date={date} place={place} btn="See pictures ->" background={'rgba(65, 230, 166, 0.3)'} />))}


            </div>


        </div>
    )
}

export default Events