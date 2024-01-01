import Image from 'next/image';
import React from 'react';
import bombermanImg from '../../public/assets/projects/bomberman.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const bomberman = () => {
  return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                    <Image
                        className='absolute z-1'
                        fill={true}
                        style={{objectFit:"cover"}}
                        src={bombermanImg}
                        alt='/'
                    />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Bomberman</h2>
                    <h3>C++ / SFML</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='pb-2'>Overview</h2>
                    <p>
                        This game is inspired by a retro game with the same name as this game, namely Bomberman, you can check <Link href='https://youtu.be/CZ9Pu9Usk5o' className='text-blue-300 hover:underline'> this link</Link>. This game can be played with 2 people. Player 1 uses WASD to move and Left-Ctrl to plant the bomb. Player 2 uses Arrows to move and space bar to plant bombs. This game was created on Linux Ubuntu 22.04 Jammy Jellyfish, which means it can't be played on your favorite Windows yet. However, it is possible that this game will be developed so that it can be played on Windows.
                    </p>
                    <Link
                        href='https://github.com/wannn-one/Bomberman'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 text-[#252525]'>See in Github!</button>
                    </Link>
                </div>
                    <div className='col-span-4 md:col-span-1 shadow-md shadow-[#FFCFCF] rounded-xl py-4'>
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
                    </div>
                    <Link href='/#projects'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
            </div>
        </div>
    );
};

export default bomberman;