import React from "react";
import AchievementItem from "./item/achievementItem";
import KKCTBN2023 from '../public/assets/achievements/KKCTBN2023.png'

const Achievements = () => {
    return (
        <div id="achievements" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase">Achievement and Certification</p>
                <h2 className="py-4">Achievements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <AchievementItem 
                        title='KKCTBN 2023' 
                        backgroundImg={KKCTBN2023} 
                        description='1st Place in National Unmanned Water Vessel Competition'
                        achievmentUrl='/achievements/kkctbn2023'
                    />
                </div>
            </div>
        </div>
    )
}

export default Achievements