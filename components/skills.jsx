import React from "react";
import SkillsItem from "./skillsItem";
import CPPIcon from '../public/assets/skills/c++.png'
import HTMLIcon from '../public/assets/skills/html.png'
import CSSIcon from '../public/assets/skills/css.png'
import JSIcon from '../public/assets/skills/javascript.png'
import NextIcon from '../public/assets/skills/next.png'
import ReactIcon from '../public/assets/skills/react.png'
import TailwindIcon from '../public/assets/skills/tailwind.png'
import GithubIcon from '../public/assets/skills/github.png'
import FigmaIcon from '../public/assets/skills/figma.png'
import CanvaIcon from '../public/assets/skills/canva.png'
import OpenCVIcon from '../public/assets/skills/opencv.png'

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#FFCFCF]">Skills</p>
                <h2 className="py-4">What can i do?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <SkillsItem
                        skillTitle='C/C++'
                        skillImage={CPPIcon}
                    />

                    <SkillsItem
                        skillTitle='HTML'
                        skillImage={HTMLIcon}
                    />

                    <SkillsItem
                        skillTitle='CSS'
                        skillImage={CSSIcon}
                    />

                    <SkillsItem
                        skillTitle='Javascript'
                        skillImage={JSIcon}
                    />

                    <SkillsItem
                        skillTitle='Next.js'
                        skillImage={NextIcon}
                    />

                    <SkillsItem
                        skillTitle='React'
                        skillImage={ReactIcon}
                    />

                    <SkillsItem
                        skillTitle='Tailwind CSS'
                        skillImage={TailwindIcon}
                    />
                    
                    <SkillsItem
                        skillTitle='Github'
                        skillImage={GithubIcon}
                    />

                    <SkillsItem
                        skillTitle='Figma'
                        skillImage={FigmaIcon}
                    />

                    <SkillsItem
                        skillTitle='Canva'
                        skillImage={CanvaIcon}
                    />

                    <SkillsItem
                        skillTitle='OpenCV'
                        skillImage={OpenCVIcon}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Skills