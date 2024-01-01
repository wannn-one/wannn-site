import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projectItem = ({title, backgroundImg, description, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-[#FFCFCF] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ADFF26] to-gray-200">
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="/" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-black tracking-wider text-center">{title}</h3>
            <p className="pb-4 pt-2 text-black text-center">{description}</p>
            <Link href={projectUrl}>
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More info!</p>
            </Link>
        </div>
    </div>
  )
}

export default projectItem