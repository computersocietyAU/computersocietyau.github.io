import React from "react";

function Subheading({ title }) {
  return (
    <div className="text-white font-main font-bold text-[20px] xlg:text-[35px] text-center uppercase flex justify-center mt-5">
      <p className="w-fit border-white border-t-[5px] border-b-[5px]">
        {title}
      </p>
    </div>
  );
}

export default Subheading;
