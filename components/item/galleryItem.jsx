import React from "react";
import Image from "next/image";

const GalleryItem = ({img, description}) => {
    return (
        <div className='relative w-full h-[50vh] group'>
            <Image
                className='rounded-xl group-hover:opacity-10 ease-in-out duration-300'
                fill={true}
                style={{objectFit:"cover"}}
                src={img}
                alt='/'
            />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                <p className='text-white cursor-default text-center w-2/3'>{description}</p>
            </div>
        </div>
    )
}

export default GalleryItem