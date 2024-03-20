import React from "react";
import bombermanImg from '../public/assets/projects/bomberman.png'
import pokerOrUnoImg from '../public/assets/projects/pokeroruno.png'
import yolov5ros2img from '../public/assets/projects/yolov5ros2.png'
import ProjectItem from "./item/projectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItem 
                        title='Bomberman' 
                        backgroundImg={bombermanImg} 
                        description='C++ SFML Game for Final Project of Data Structure and Algorithm Analysis course'
                        projectUrl='/project/bomberman'
                    />

                    <ProjectItem
                        title='Poker or Uno?'
                        backgroundImg={pokerOrUnoImg}
                        description='A CNN-based game built with OpenCV and TensorFlow for Final Project of Digital Image Processing course'
                        projectUrl='/project/poker-or-uno'

                    />

                    <ProjectItem
                        title='YOLOv5 ROS2'
                        backgroundImg={yolov5ros2img}
                        description='A ROS2 package for YOLOv5 object detection'
                        projectUrl='/project/yolov5ros2'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Projects