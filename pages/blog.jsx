import Image from 'next/image';
import React from 'react';
// import bookshelfImg from '../public/assets/projects/bookshelf-tekkom.png';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    fill={true}
                    style={{objectFit:"cover"}}
                    src={'/'}
                    alt='/'
                />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Blog Section</h2>
                <h3 className='ml-1'>My article will appear here!</h3>
            </div>
        </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <h2 className='pb-2'>Overview</h2>
                    <p>
                        Will be developed soon
                    </p>
                    <Link href='/'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;