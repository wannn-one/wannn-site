import React from "react";
import Image from "next/image";
import SkillsItem from "./skillsItem";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#FFCFCF]">Skills</p>
                <h2 className="py-4">What can i do?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <SkillsItem
                        skillTitle='C/C++'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='HTML'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='CSS'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='Javascript'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='Next.js'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='React'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='Tailwind CSS'
                        skillImage=''
                    />
                    
                    <SkillsItem
                        skillTitle='Github'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='Figma'
                        skillImage=''
                    />

                    <SkillsItem
                        skillTitle='Canva'
                        skillImage=''
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Skills