import Image from 'next/image'
import React from 'react'
import ProfilePhoto from '../public/assets/ProfilePhoto.png'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const contacts = () => {
  return (
    <div id='contacts'className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#FFCFCF]'>Contacts</p>
            <h2 className='py-4'>Get in touch!</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* Left */}

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ProfilePhoto}/>
                        </div>
                        <div>
                            <h2 className='py-2'>Ikhwanul Abiyu Dhiyya'ul Haq</h2>
                            <p>4th Semester Undergraduate Student of Computer Engineering</p>
                            <p className='py-4'>Currently available for internship. Contact me and let's talk</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect with me!</p>
                            <div className='flex items-center justify-between py-4'>
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
            {/* Right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                                </div>
                                
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' type='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' type='text' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-400' rows='10' type='text' />
                            </div>
                            <button className='w-full p-4 text-gray-100 uppercase mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-[#FFCFCF] p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#FFCFCF]' size={30}/>
                    </div>
                </Link>    
            </div>
        </div>
    </div>
  )
}

export default contacts