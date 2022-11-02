import React from 'react';


const DeputyHead = ({ dhead }) => {
    return (
        <div className="px-5 my-5 transition ease-in-out hover:scale-110 duration-200">
            <a href={dhead.lnurl}>
                <div className="glassIco mx-auto py-4 px-5 flex flex-col justify-start items-center relative">
                    <img src={"/profile.jpg"} alt="head" className="w-[75px] h-[75px] rounded-[50%] object-contain border-solid border-2 border-imgBorder" />
                    <div className="mt-2 mb-5 text-center">
                        <p className="my-1 tracking-[1px] text-[15px]">{dhead.name}</p>
                        <p className="my-1 tracking-[1px] text-[15px]">{`${dhead.year} year, ${dhead.department} dept`}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 domain text-center py-1.5">
                        <p className="font-bold text-[14px]">{dhead.domain}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default DeputyHead;