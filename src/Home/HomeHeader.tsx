import React, {FC} from 'react';
import "./Home.scss"

interface HomeHeaderProps {
    step: number;
}

const HomeHeader: FC<HomeHeaderProps> = ({step}: HomeHeaderProps) => {
    return (
        <div id="home-header">
            <div className="home-progress">
                <div className={step >= 1 ? "active" : "item"}></div>
                <div className={step >= 2 ? "active" : "item"}></div>
                <div className={step >= 3 ? "active" : "item"}></div>
            </div>
            <p>Welcome</p>
        </div>
    )
}

export default HomeHeader;