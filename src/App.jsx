import React from "react";

const App = () => {
  return (
    <>
      <header className="bg-[#C2410C] lg:px-12 px-5 flex py-2 justify-between items-center sticky  h-[64px] ">
        <div className="logo">
          <img src="header-logo.png" alt="haeder-logo" className="h-14" />
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-white text-md hover:outline rounded px-3 py-1.5 btn">
            Login
          </button>
          <button className="bg-white px-3 py-1 rounded-sm text-[#C2410C] hover:outline hover:bg-transparent hover:text-white text-md">
            Register
          </button>
        </div>
      </header>
      <div className="backgroud">
        <img
          src="bg.png"
          alt="bg-image"
          className="h-[90vh] w-full object-cover"
        />
      </div>
      <div className="container flex-wrap grid gap-5 font-inter bg-white absolute xl:top-[26%] lg:top-[15%] top-[15%] lg:w-113 w-70 md:w-100 left-[6.2%]  rounded-xl py-6 lg:px-10 p-6">
        <div>
          <h1 className="text-[#C2410C] text-3xl text-center font-bold">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mt-2 lg:text-[16px] text-sm">
            Login to your Cravings account
          </p>
        </div>
        <div className=" grid gap-2 ">
          <label htmlFor="email" className="font-semibold opacity-75">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full  border border-0.5 border-[#e7d9c9]  px-3 py-2 rounded placeholder:text-gray-600 placeholder:opacity-90 text-sm focus:outline-[#C2410C]  "
          />
        </div>
        <div className=" grid gap-2 ">
          <label htmlFor="password" className="font-semibold opacity-75">Password</label>
          <div className=" border border-0.5 border-[#e7d9c9]  px-3 py-2 rounded placeholder:text-gray-600 placeholder:opacity-90 text-sm flex focus-within:outline-[#C2410C] focus-within:outline-2">
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full outline-none"
          />
          <i className="bi bi-eye-fill hover:text-[#C2410C] opacity-85 hover:text-[#C2410C]"></i>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex lg:gap-2 gap-1 items-center">
            <input type="checkbox" id="remember"className="scale-85 lg:scale-90"/>
            <label htmlFor="remember" className="text-gray-600 lg:text-md text-sm">
              Remember
            </label>
          </div>
          <div>
            <a href="" className="text-[#C2410C] hover:underline lg:text-md text-sm">
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <button className="bg-[#C2410C] w-full py-2 text-white text-lg rounded-md">Login</button>
        </div>
        <div className="flex text-gray-500 items-center gap-2 mt-2">
          <hr className="lg:w-25 w-7 text-gray-400"/><span>Don't have an accont</span><hr className="lg:w-25 w-7 text-gray-400"/>
        </div>
        <p className="text-[#C2410C] text-center lg:text-md text-sm">Create an account</p>
      </div>
    </>
  );
};

export default App;
