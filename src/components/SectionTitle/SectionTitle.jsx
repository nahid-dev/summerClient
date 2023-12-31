import React from "react";

const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center flex justify-center my-10">
      <div className="text-center flex flex-col items-center space-y-3">
        <div className="border-dashed border-b-4 border-sky-500 max-w-fit px-5 text-center pb-3">
          <p className="uppercase">{subTitle}</p>
        </div>
        <h4 className="text-4xl font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default SectionTitle;
