import React from 'react'
import Image from 'next/image'

const skillsItem = ({skillTitle, skillImage}) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
                <Image 
                    src={skillImage} 
                    alt='/'
                    width='64px'
                    height='64px'
                />
            </div>
        <div className="flex flex-col items-center justify-center">
            <h3>{skillTitle}</h3>
        </div>
        </div>
    </div>
  )
}

export default skillsItem