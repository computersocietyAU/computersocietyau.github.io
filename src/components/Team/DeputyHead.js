import React from 'react';


const DeputyHead = ({ details }) => {
    return (
        <div className="px-5 my-5">
            <a href="https://www.linkedin.com/in/vishnu-vasan-r/">
                <div className="glassIco cardActive w-[max(60%,330px)] mx-auto py-4 px-5 flex flex-col justify-start items-center relative">
                    <img src={"/profile.jpg"} alt="head" className="w-[75px] h-[75px] rounded-[50%] object-contain border-solid border-2 border-imgBorder" />
                    <div className="mt-2 mb-5 text-center">
                        <p className="my-1 tracking-[1px] text-[15px]">{details.name}</p>
                        <p className="my-1 tracking-[1px] text-[15px]">{details.info}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 domain text-center py-1.5">
                        <p className="font-bold text-[14px]">{details.domain}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default DeputyHead;