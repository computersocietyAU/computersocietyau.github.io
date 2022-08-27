import React from 'react'
import CalenderIcon from '../Icons/CalenderIcon';
import PlaceIcon from '../Icons/PlaceIcon';

import './EventCards.css'


function EventCards({ cover, name, desc, date, place, background,btn}) {

    
    return (
        <div className='event-card' style={{ background: background }}>
            <div className='event-cover'>
                <div className='event-img-container'>
                    <img src={cover} alt="cover" className='event-cover-img' />
                </div>

            </div>
            <div className='event-details'>
                <div className='event-heading'>{name}</div>
                <div className='event-desc'>{desc}
                    <div className='event-schedule'>
                        <div><CalenderIcon height={30} width={30} /><p>{date}</p></div>
                        <div><PlaceIcon height={30} width={30} /><p>{place}</p></div>
                    </div>
                </div>
                <button className='events-register-btn'>{btn}</button>

            </div>

        </div>
    )
}

export default EventCards