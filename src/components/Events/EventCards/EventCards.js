import React from 'react'
import CalenderIcon from '../Icons/CalenderIcon';
import PlaceIcon from '../Icons/PlaceIcon';

function EventCards({ coverImage, title, description, date, location, background, buttonText }) {


    return (
        <div className='w-screen xlg:w-[90vw] h-fit py-[2rem] xlg:py-0 pb-[4rem]  mx-auto mt-[2rem] mb-[3rem] flex-col xlg:flex-row items-center xlg:items-start justify-evenly xlg:justify-start xlg:rounded-[37px] flex xlg:h-[50vh] relative ' style={{ background: background }}>
            <div className='xlg:w-[35%] w-[90%] m-auto flex xlg:justify-center xlg:items-center xlg:px-[2rem]'>
                <img src={coverImage} alt="cover" className='w-full h-auto' />
            </div>
            <div className='w-[85%] m-auto xlg:m-0 xlg:block flex flex-col justify-center items-center xlg:w-[65%] pt-4'>
                <div className='font-bold xlg:text-3xl text-xl my-4 text-center uppercase'>{title}</div>
                <div className='font-medium text-[14px] xlg:text-[17px] leading-7 xlg:pr-8 xlg:pl-0 p-x-[0.5rem] text-center capitalize   '>{description}
                    <div className='flex xlg:border-0 xlg:block justify-between border-y-[1px] border-y-[#41e6a680] xlg:m-0 xlg:p-0 my-[1.5rem] py-[0.5rem] '>
                        <div className='xlg:text-lg text-sm flex items-center xlg:gap-4 gap-2 text-start m-2.5 uppercase'><CalenderIcon height={30} width={30} /><p>{date}</p></div>
                        <div className='xlg:text-lg text-sm flex items-center xlg:gap-4 gap-2 text-start m-2.5 uppercase'><PlaceIcon height={30} width={30} /><p>{location}</p></div>
                    </div>
                </div>
                <button className='static xlg:absolute bottom-[2rem] w-[150px] text-[14px] xlg:text-[16px]   xlg:w-fit right-[1rem] mt-[1rem] xlg:mt-0 mr-0 xlg:mr-[3rem] uppercase bg-[#D9D9D9] text-[#192444] rounded-xl py-[10px] px-[15px] hover:bg-[#41e6a7b7] hover:text-[#d9d9d9] '>{buttonText}</button>

            </div>

        </div>
    )
}

export default EventCards