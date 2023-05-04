import React from 'react'

import "../CSS/Homepage.css"

import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"


const HomePage = () => {
  return (
    <div>

    
    <div className='hero'>
        <div className="left">
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        


{/* /////////////////// */}

        

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>
              Ideal body
            </span>
            </div>
            <div>
              <span>
              In here we will help You to build your ideal body and to help you to never stay at same level
                </span> 
              </div>
          </div>

          {/* Figures */}

          <div className="figures">
            <div>
              <span>+140</span>
            <span>EXPERT COACHES</span>
            </div>



            <div>
              <span>+978</span>
            <span>MEMBERS JOINED</span>
            </div>



            <div>
              <span>+50</span>
            <span>FITNESS PROGRAMS</span>
            </div>
          </div>


          {/* hero buttons */}

          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>


            <buttons className="btn">Learn More</buttons>
          </div>


        </div>
       






        <div className="right">
          <button className='btn'>join Now</button>

          <div className="heart-rate">
            <img src={Heart} alt="Heart" />
            <span>Heart Rate</span> <span>116 Bpm</span>
          </div>

          {/* images */}

          <img src={hero_image} alt=""className='hero-image' />
          <img src={hero_image_back} className='hero-image-back'alt="" />


          <div className="calories">
            <img src={Calories} alt="" />
            <div>

            <span>Calories Burn</span>
            <span>220 kcal</span>
            </div>
          </div>
        </div>
        
        
    </div>

{/* PROGRAMS */}


    <div className="programs">
          <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>toshape you</span>
          </div>
        </div>











        {/* Programs */}

    </div>
  )
}

export default HomePage
