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
                    <p className="py-2 text-gray-100 max-w-[70%] m-auto">
                    Hi, i'm Ikhwanul Abiyu Dhiyya'ul Haq, an Undergraduate Computer Engineering Student. I'm a student at Institut Teknologi Sepuluh Nopember Surabaya. I'm the type of guy that's active in lectures, always tries to develop himself every day to become a better person in the future. A person who quickly adapts and learns new things, and includes people who are generalists. Interested in programming whatsoever. Can be robotics, application/web development, IoT, etc. 
                    </p>
                        <div className='flex items-center justify-between max-w-[330px] m-auto py-2'>
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
                                href='https://mail.google.com/mail/u/0/?fs=1&to=ikhwanulabiyu@gmail.com&su=Introduction%20From%20Us&body=%27%27&bcc=%27%27&tf=cm'
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