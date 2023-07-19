import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="max-h-[500px]">
                    <p className="uppercase text-sm tracking-widest text-gray-300">Lets learn together</p>
                    <h1 className="py-2 text-gray-100">
                        Hi, I'm <span className="text-[#ADFF26]">Ikhwan</span>!
                    </h1>
                    <h1 className="py-2 text-gray-100">
                        Undergraduate Student at Computer Engineering ITS
                    </h1>
                    <p className="py-4 text-gray-100 max-w-[70%] m-auto">
                    I am a 5th semester student of Computer Engineering ITS. I'm the type of guy that’s active in lectures, always tries to develop himself every day to become a better person in the future. A person who quickly adapts and learns new things, and includes people who are generalists. Currently interested in Machine Learning and Computer Vision. 
                    </p>
                        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                            <a
                                href='https://www.linkedin.com/in/ikhwanul-abiyu-dhiyya-ul-haq-249268220/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className="rounded-full shadow-md shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedin/>
                                </div>
                            </a>
                                
                            <a
                                href='https://github.com/wannn-one'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className="rounded-full shadow-md shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
                                </div>
                            </a>

                            <a
                                href='mailto:ikhwanulabiyu@gmail.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className="rounded-full shadow-md shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail/>
                                </div>
                            </a>

                            <a
                                href='/blog'
                            >
                            <div className="rounded-full shadow-md shadow-[#FFCFCF] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main