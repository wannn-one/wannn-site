import React, {useEffect, useState} from "react";
import Image from "next/image"
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from "next/router";
import NavbarImage from "../public/assets/NavbarIcon.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#252525')
    const [linkColor, setLinkColor] = useState('#FFFFFF')
    const router = useRouter()

    // To keep navbar open in project page and set the navbar link color
    useEffect(()=>{
        if (router.asPath === '/bomberman') {
            setNavBg('transparent')
            setLinkColor('#FFCFCF')
        }else{
            setNavBg('#252525')
            setLinkColor('#FFCFCF')
        }
    }, [router])

    // Close navbar when menu was clicked
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            }else{
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, [])

    return (

        // Desktop without navbar burger
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? "fixed w-full h-20 shadow-md z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image
                        className="ml-2" 
                        src={NavbarImage} 
                        alt="icon" 
                        width='125' 
                        height='50'
                    />
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex mr-2">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#achievements'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Achievements</li>
                        </Link>
                        <Link href='/#contacts'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contacts</li>
                        </Link>
                        <Link 
                            href='https://drive.google.com/file/d/1NFvmlVKlr6u36YreOCzfGxrr4r9nl2_O/view?usp=sharing'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className="ml-10 text-sm uppercase hover:border-b">See my CV!</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden mr-2">
                        <AiOutlineMenu size={25}></AiOutlineMenu>
                    </div>
                </div>
            </div> 
        

        {/* Mobile App with Burger */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/40' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#252525] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Link href='/'>
                            <Image 
                                src={NavbarImage} 
                                alt="icon" 
                                width='125' 
                                height='50'
                                onClick={()=> setNav(false)}
                                />
                        </Link>
                        <div onClick={handleNav} className="rounded-full shadow-md shadow-[#FFCFCF] p-3 cursor-pointer">
                            <AiOutlineClose></AiOutlineClose>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-90% py-4">Lets Learn Together!</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href="/">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
                        </Link>
                        <Link href="/#contacts">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Contacts</li>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1Eq_BkVtngLbVSVIECRwHKCEQwbln_bLO/view?usp=sharing">
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">See my cv!</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#FFCFCF]">
                            Lets Connect!
                        </p>
                            <div className='flex items-center justify-center py-4'>
                                <Link
                                    href='https://www.linkedin.com/in/ikhwanul-abiyu-dhiyya-ul-haq-249268220/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className="rounded-full shadow-md shadow-[#FFCFCF] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedin/>
                                    </div>
                                </Link>
                                    
                                <Link
                                    href='https://github.com/wannn-one'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className="rounded-full shadow-md shadow-[#FFCFCF] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
                                    </div>
                                </Link>

                                <Link
                                    href='mailto:ikhwanulabiyu@gmail.com'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className="rounded-full shadow-md shadow-[#FFCFCF] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail/>
                                    </div>
                                </Link>

                                <Link
                                    href='/blog'
                                >
                                    <div className="rounded-full shadow-md shadow-[#FFCFCF] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar