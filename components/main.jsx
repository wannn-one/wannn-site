import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-300">Lets build together</p>
                    <h1 className="py-4 text-gray-100">
                        Hi, I'm <span className="text-[#ADFF26]">Ikhwan</span>
                    </h1>
                    <h1 className="py-2 text-gray-100">
                        Undergraduate Student at Computer Engineering ITS
                    </h1>
                    <p className="py-4 text-gray-100 max-w-[70%] m-auto">
                    Hi, i'm Ikhwanul Abiyu Dhiyya'ul Haq, an Undergraduate Computer Engineering Student. I'm a student at Institut Teknologi Sepuluh Nopember Surabaya. I'm the type of guy that's active in lectures, always tries to develop himself every day to become a better person in the future. A person who quickly adapts and learns new things, and includes people who are generalists. Interested in programming whatsoever. Can be robotics, application/web development, IoT, etc. 
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedin></FaLinkedin>
                        </div>
                        <div className="rounded-full shadow-lg shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub></FaGithub>
                        </div>
                        <div className="rounded-full shadow-lg shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail></AiOutlineMail>
                        </div>
                        <div className="rounded-full shadow-lg shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main