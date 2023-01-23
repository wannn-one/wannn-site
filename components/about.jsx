import Image from "next/image";
import React from "react";
import ProfilePicture from "../public/assets/ProfilePhoto.png"

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#FFCFCF]">About</p>
                    <h2 className="py-4">Who am i?</h2>
                    <p className="py-2 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi, harum voluptate, rem ea ipsa omnis animi quas nemo reiciendis facilis? Veniam at dolor a vitae quaerat veritatis dolore quia.</p>
                    <p className="py-2 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi, harum voluptate, rem ea ipsa omnis animi quas nemo reiciendis facilis? Veniam at dolor a vitae quaerat veritatis dolore quia.</p>
                    <p className="py-2 text-gray-200 underline cursor-pointer">Check out my latest projects!</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-[#FFCFCF] flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={ProfilePicture} className="rounded-xl" alt="profile-picture"/>
                </div>
            </div>
        </div>
    )
}

export default About