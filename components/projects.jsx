import React from "react";
import bombermanImg from '../public/assets/projects/bomberman.png'
import bookshelfTekkomImg from '../public/assets/projects/bookshelf-tekkom.png'
import ProjectItem from "./projectItem";

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
                        projectUrl='/bomberman'
                    />

                    <ProjectItem
                        title='Bookshelf Tekkom'
                        backgroundImg={bookshelfTekkomImg}
                        description='Books of All Computer Engineering Courses in ITS (2022 Curriculum)'
                        projectUrl='/'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Projects