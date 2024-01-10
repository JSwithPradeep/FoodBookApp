import React from "react";
const NewsLatter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#1d2435]">
     <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow</h1>
          <p>Sign Up to join our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00d19a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none">
              Notify Me
            </button>
          </div>
          <p>we are concerned about the security of your data, Read("")
          <span className="text-[#00d19a]">Privancy Policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1 dark:bg-gray-700"/>
        
      </div>
    </div>
  );
};

export default NewsLatter;