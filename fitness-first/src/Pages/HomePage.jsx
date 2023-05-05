import React from "react";
import Slider from "../components/Slider/Slider";
import Articals from "../components/Articals/Articals";




// fitness-first\src\assets\rightArrow.png
// Programs Data

import {programsData} from "../data/programsData"
import RightArrow from "../assets/rightArrow.png"
import Reason from '../components/Reasons/Reason'
import Plan from '../components/Plans/Plan'
import Testimonials from '../components/Testimonials/Testimonials'
// import Plan from '../components/Plans/Plan'
import {motion} from "framer-motion"


import Reason from "../components/Reasons/Reason";
import HomeMid from "../components/HomeMid";

const HomePage = () => {

  const transition = {type:"spring",duration:3}
  const mobile = window.innerWidth<=768?true:false

  return (
    <div
      {/* Programs */}
      
      <Reason />
      <Articals />
      <Slider />


    
    <div className='hero'>
        <div className="left">
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"165px":"238px"}}
          whileInView = {{left:"8px"}}
          transition = {{...transition,type:"tween"}}
          >
            
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>
        




        

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

          <motion.div className="heart-rate"
          transition={transition}
          whileInView={{right:"4rem"}}
          initial={{right:"-6rem"}}
          >
            <img src={Heart} alt="Heart" />
            <span>Heart Rate</span> <span>116 Bpm</span>
          </motion.div>

          {/* images */}

          <img src={hero_image} alt=""className='hero-image' />
          <motion.img src={hero_image_back}
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          className='hero-image-back'alt="" />


          <motion.div className="calories"
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
          >
            <img src={Calories} alt="" />
            <div>

            <span>Calories Burn</span>
            <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
        
        
    </div>

{/* PROGRAMS */}


    <div className="programs">
          <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>toshape you</span>
          </div>

          <div className="program-categories">
            {
              programsData.map((el)=>(
                <div className="category">
                  {el.image}
                  <span>{el.heading}</span>
                  <span>{el.details}</span>
                  <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                  </div>
                </div>
              ))
            }
          </div>









        </div>
        {/* Programs */}

        <Reason/>
        <Plan/>
        <Articals/>
        <Slider/> 
        <Testimonials/>

    </div>
  );
};

export default HomePage;
