import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProfilePicture from "../public/assets/photo2.png"

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-40">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#FFCFCF]">About</p>
                    <h2 className="py-4">Who am i?</h2>
                    <p className="py-2 text-gray-200">
                        I started my career in programming when I was accepted into Computer Engineering Bachelor. I learned C# which was a request from my father. I still remember one of the assignments given, which was a simple game of rock paper scissors with 2 user inputs. However, I studied C and C++ in a basic programming course at college. Moving on to 2nd semester, I studied class, STL C++, and an introduction to data structures in advanced programming courses. I learned web programming while being a commitee of MAGE 8 (Multimedia and Game Event) as Junior Backend Developer.
                    </p>
                    <p className="py-2 text-gray-200">
                        In 3rd semester, I studied data structures, where the final project was to make a game using the SFML library with the C++ programming language. At 4th semester, joined in Barunastra Roboboat Team as Intern Programmer that responsible for datasets labeling and training. We achieved 1st Place Autonomy Challenge & 2nd Place Overall Design Documentation on RoboBoat 2023 by RoboNation in March 2023.
                    </p>
                    <p className="py-2 text-gray-200">
                        I promoted by Barunastra ITS as Computer Vision that would research, develop, and deploy software on Autonomous Surface Vehicles (ASV). Responsible for the ASV’s computer-related systems on computer vision for the ASV to perform tasks autonomously. 
                    </p>
                    <p className="py-2 text-gray-200">
                        In October 2023, we achieved 1st Place Autonomous Tourism Surface Vessel (ATSV) in KKCTBN 2023 by Puspresnas after beating 21 teams from another university in Indonesia.
                    </p>
                    <Link href="#projects">
                        <p className="py-2 cursor-pointer hover:underline">Check out my latest projects!</p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-md rounded-xl shadow-[#FFCFCF] flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={ProfilePicture} className="rounded-xl" alt="profile-picture"/>
                </div>
            </div>
        </div>
    )
}

export default About