import React from "react";
import Image from "next/image";
import SigninImage from "@/public/sign-in.svg";
import Logo from "@/public/projsync-logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="w-screen h-dvh flex ">
      <div className="w-2/5 flex flex-col items-center justify-center ">
        <div className="w-[70%] flex flex-col justify-center items-center">
          <Image src={Logo} className="w-52 my-6" alt="ProjSync Logo" />
          <h3 className="font-extralight text-[#1B1F3BB2] text-3xl mb-7 ">Login into your account</h3>
          <div className="w-full ">
            <p className="font-light text-sm mb-2">Email address</p>
            <div className="flex mb-2 items-center">
              <input
                type="email"
                placeholder="alex@email.com"
                className="bg-[#F1F3F6] w-4/5 rounded-l-lg z-0 p-3 text-sm"
              />
              <div className=" flex items-center justify-center bg-projsync-green rounded-lg size-10 -ml-2 z-10">
                <AiOutlineMail className="text-white text-xl" />
              </div>
            </div>
          </div>
          <div className="w-full mb-2">
            <p className="font-light text-sm mb-2">Password</p>
            <div className="flex mb-2 items-center">
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-[#F1F3F6] w-4/5 rounded-l-lg z-0 p-3 text-sm"
              />
              <div className=" flex items-center justify-center bg-projsync-green rounded-lg size-10 -ml-2 z-10">
                <RiLockFill className="text-white text-xl" />
              </div>
            </div>
          </div>
          <a href="#" className="text-sm text-blue-500 mb-6">
            Forgot password?
          </a>

          <button className="bg-projsync-green text-white text-xs h-10 w-[88%] mr-12 mb-5 rounded-md">
            Login Now
          </button>
          <button className="flex items-center justify-center border h-10 w-9/12 rounded-xl mr-12">
            <FcGoogle className="text-2xl mr-3.5" />
            <p className="text-xs">
              Login with <span className="font-bold">google</span>
            </p>
          </button>
          <div className="flex items-center my-6 w-full">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="border border-projsync-green text-projsync-green text-md font-medium h-10 w-[88%] mr-12 mb-24 rounded-md">
            Signup Now
          </button>
        </div>
      </div>
      <div className="w-3/5 flex items-center justify-center bg-[#F1F3F6]">
        <Image src={SigninImage} alt="SignIn Image" className="size-[80%]" />
      </div>
    </div>
  );
};

export default SignIn;
