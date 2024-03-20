
import Image from 'next/image';
import React from 'react';
import pokeroruno from '../../public/assets/projects/pokeroruno.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const PokerOrUno = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    fill={true}
                    style={{objectFit:"cover"}}
                    src={pokeroruno}
                    alt='/'
                />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-4'>Poker or Uno</h2>
                <h3 className='ml-1'>A CNN-based game built with OpenCV and TensorFlow for Final Project of Digital Image Processing course</h3>
            </div>
        </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
            <p>Project</p>
            <h2 className='pb-2'>Overview</h2>
            <p>
                A game that implement Image Classification using CNN. The game has a rule like UNO but played with poker card. You can play this game by yourself. The game will recognize the card you put on the table and will give you a notification if the card is valid or not. The game will also recognize the card you draw from the deck and will give you a notification if the card is valid or not. The game will end if there is a player/computer who has no card left in their hand.
            </p>
            <Link
                href='https://github.com/wannn-one/poker-or-uno'
                target='_blank'
                rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8 text-[#252525]'>see in github!</button>
            </Link>
        </div>
            <div className='col-span-4 md:col-span-1 shadow-md shadow-[#FFCFCF] rounded-xl py-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-[#FFCFCF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> OpenCV
                        </p>
                        <p className='text-[#FFCFCF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> TensorFlow
                        </p>
                        <p className='text-[#FFCFCF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Python
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

export default PokerOrUno;