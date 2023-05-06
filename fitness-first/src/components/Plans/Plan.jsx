import React from 'react'
import "./Plan.css"
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png"
const Plan = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            {/* ?plans carde */}
            <div className="plans">
                {plansData.map((el, i) => (
                    <div className="plan" key={i}>
                        {el.icon}
                        <span>{el.name}</span>
                        <span>$ {el.price}</span>

                        <div className="features">
                            {el.features.map((element, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{element}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits </span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plan