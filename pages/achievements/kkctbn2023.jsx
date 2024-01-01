import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import GalleryItem from '@/components/item/galleryItem';
import kkctbn2023 from '../../public/assets/achievements/KKCTBN2023.png';
import onstage from '../../public/assets/achievements/onstage.png';
import sleepwell from '../../public/assets/achievements/sleepwell.png';
import atsv_depan from '../../public/assets/achievements/atsv_depan.png';
import atsv_belakang from '../../public/assets/achievements/atsv_belakang.png';
// import { RiRadioButtonFill } from 'react-icons/ri';


const KKCTBN2023 = () => {
  return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                    <Image
                        className='absolute z-1'
                        fill={true}
                        style={{objectFit:"cover"}}
                        src={kkctbn2023}
                        alt='/'
                    />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-4'>KKCTBN 2023</h2>
                    <h3>1st Place in National Unmanned Water Vessel Competition</h3>
                    <h4>Issued by Puspresnas</h4>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Achievements</p>
                    <h2 className='py-2'>Overview</h2>
                    <p>
                        KKCTBN 2023 is a competition held by Puspresnas (National Research and Development Agency) in 2023. The competition is about making an unmanned water vessel that can do some tasks in the water. The tasks are to sail through the river represented by red buoy and green buoy for the left and right reference, to detect and take a surface photo of mangrove and underwater photo of fishes. The competition is held in Danau Kenanga, Universitas Indonesia.
                    </p>
                    <h2 className='py-4'>Gallery</h2>
                        <div className='grid md:grid-cols-2 gap-8'>
                            <GalleryItem
                                img={onstage}
                                description='A photo of our main team on the stage.'
                            />
                            <GalleryItem
                                img={sleepwell}
                                description='A photo of our main + support team on the stage.'
                            />
                            <GalleryItem
                                img={atsv_depan}
                                description='Nala Athena, our ATSV (Autonomous Tourism Surface Vessel) prototype for KKCTBN 2023. Equipped with Logitech C930e Webcam and Leishen LiDAR LSN301 for its vision system.'
                            />
                            <GalleryItem
                                img={atsv_belakang}
                                description='Nala Athena on autonomous mode, executing the task to going through the river (buoys).'
                            />
                        </div>
                    <Link href='/#achievements'>
                        <p className='underline cursor-pointer pt-8'>Back</p>
                    </Link>
                </div>
                {/* <div className='col-span-4 md:col-span-1 shadow-md shadow-[#FFCFCF] rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-[#FFCFCF] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> C++
                            </p>
                            <p className='text-[#FFCFCF] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> SFML
                            </p>
                            <p className='text-[#FFCFCF] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Ubuntu 22.04 Jammy Jellyfish
                            </p>
                            <p className='text-[#FFCFCF] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Github
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default KKCTBN2023;