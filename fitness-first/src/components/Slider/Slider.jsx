import React from 'react'
// import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import "./Slider.css"

const Slider = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const arr = [
    {
      id:1,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:2,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:3,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:4,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:5,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:6,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:7,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:8,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:9,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },
    {
      id:10,
      image:"https://placehold.co/600x400/png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia maxime eius commodi et aut repellat nam vel temporibus consequuntur."
    },

  ]
  return (
    <div className='slider_section'>
      <p className='title'> Testimonial</p>
      <h1 className='h1_title'>They are Happy Clients After Joining Us</h1>
      <Carousel breakPoints={breakPoints}>
        {
          arr.map((el)=>{
            return <Item key={el.id}>
              <div className="image_div">
              <img src={el.image} alt="altimage" />
              {/* hello */}
              </div>
              <div className="parag_div">
                {/* hello */}
              <p className="desc">{el.desc}</p>
              </div>
              
             
              {/* <p>{el.desc}</p> */}
            </Item>
          })
        }
         </Carousel>
      {/* <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel> */}
    </div>
  )
}
const Item = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: #00008B;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  text-align: center;
`;

export default Slider
