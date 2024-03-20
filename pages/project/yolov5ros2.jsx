import Image from 'next/image';
import React from 'react';
import yolov5ros2img from '../../public/assets/projects/yolov5ros2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const yolov5ros2 = () => {
    return (
          <div className='w-full'>
              <div className='w-screen h-[50vh] relative'>
                  <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                      <Image
                          className='absolute z-1'
                          fill={true}
                          style={{objectFit:"cover"}}
                          src={yolov5ros2img}
                          alt='/'
                      />
                  <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                      <h2 className='py-2'>YOLOv5-ROS2</h2>
                      <h3> A general computer vision package - built with YOLOv5 and ROS2 Humble </h3>
                  </div>
              </div>
  
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                  <div className='col-span-4'>
                      <p>Project</p>
                      <h2 className='pb-2'>Overview</h2>
                      <p>
                      A package to run YOLOv5 on ROS2 Humble, based on the <Link href='https://github.com/Ultralytics/yolov5' className='text-blue-300 hover:underline'></Link> repository. Just run build, source, and run the package to use it.
                      </p>
                      <Link
                          href='https://github.com/wannn-one/yolov5-ros2'
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
                                      <RiRadioButtonFill className='pr-1' /> ROS2 Humble
                                  </p>
                                  <p className='text-[#FFCFCF] py-2 flex items-center'>
                                      <RiRadioButtonFill className='pr-1' /> Pytorch
                                  </p>
                                  <p className='text-[#FFCFCF] py-2 flex items-center'>
                                      <RiRadioButtonFill className='pr-1' /> Object Oriented Programming
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
  
  export default yolov5ros2;