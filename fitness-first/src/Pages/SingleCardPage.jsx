<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./SingleCardPage.css"
import ReactPlayer from 'react-player'
import { getSigledata } from '../Redux/DataReducer/action'

const SingleCardPage = () => {

  const { id } = useParams()
  const siglepageData = useSelector((store) => store.DataReducer.siglepageData)
  // const isLoading = useSelector((store)=> store.DataReducer.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSigledata(id))
  }, [])
  // console.log("gymdata",gymData)
  // const {exercise,instructions,videoLink,image,price,category} = gymData
  // console.log(exercise)
  return (
    <div style={{ backgroundColor: "black"}}>

      {
        siglepageData.map((el) => {

          return <div key={el.id}  className="singlepage_Section"style={{ width: "50%", margin: "auto", justifyContent: "center" }}>

            <h1>exercise details</h1>

            <ReactPlayer url={el.videoLink} controls={true}/>


            <div className='single_product_main_div'>

                  <div className="single_product_left_div">
                    <img src={el.image} alt="altimage" />
                  </div>

                    <div className="single_product_right_div">
                      <h2>exercise:{el.exercise}</h2>
                      {/* <p>{rating} (50 customer reviews)</p> */}
                      {/* <p>reviews</p> */}
                      {/* <p>Rating : <b><span>{rate}.0</span></b></p> */}
                      <b><del>
                        MRP ₹{el.price + 4599}
                      </del></b>
                      <p style={{ color: "white" }}>price:{el.price}</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores repellat! Modi facilis velit laborum veniam enim nihil, itaque ad atque ipsam et rem hic consequuntur repellendus laboriosam delectus animi!</p>
                      <div>
                        {/* <b><p>Available: <span>In Stock</span></p></b> */}
                        <b><p>Categoty : {el.category}</p></b>
                        {/* <b> <p>Color : {color}</p></b> */}
                      </div>
                      <b> <hr style={{ color: "black" }} /></b>

                      {/* <button className='button' onClick={()=> getcart(arr)}> Add to Cart</button> */}

                    </div>
            </div>

          </div>
        })
      }

    </div>
  );
}
=======
import React, { useEffect } from "react";
import { Skeleton, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/SingleCardPage.css";
import ReactPlayer from "react-player";
import { getSingleData } from "../Redux/DataReducer/action";

const SingleCardPage = () => {
  const { id } = useParams();
  const el = useSelector((store) => store.dataReducer.products);
  // const isLoading = useSelector((store)=> store.DataReducer.isLoading)
  const dispatch = useDispatch();
>>>>>>> 249a478c498d748fb885572bf14f8fe7bc5d04c4

  useEffect(() => {
    dispatch(getSingleData(id));
  }, []);
  // console.log("gymdata",gymData)
  // const {exercise,instructions,videoLink,image,price,category} = gymData
  // console.log(exercise)
  return (
    <div className="bg-black-1000">
      
      <div
        key={el.id}
        className="singlepage_Section"
        style={{ width: "50%", margin: "auto", justifyContent: "center" }}
      >
        <h1>exercise details</h1>

        <ReactPlayer url={el.videoLink} controls={true} />

        <div className="single_product_main_div">
          <div className="single_product_left_div">
            <img src={el.image} alt="altimage" />
          </div>

          <div className="single_product_right_div">
            <h2>exercise:{el.exercise}</h2>
            {/* <p>{rating} (50 customer reviews)</p> */}
            {/* <p>reviews</p> */}
            {/* <p>Rating : <b><span>{rate}.0</span></b></p> */}
            <b>
              <del>MRP ₹{el.price + 4599}</del>
            </b>
            <p style={{ color: "white" }}>price:{el.price}</p>
            {el.instructions && <ol className="text-left list-decimal">{el.instructions.map(al => <li> {al}</li>)}</ol>}
            <div>
              {/* <b><p>Available: <span>In Stock</span></p></b> */}
              <b>
                <p>Categoty : {el.category}</p>
              </b>
              {/* <b> <p>Color : {color}</p></b> */}
            </div>
            <b>
              {" "}
              <hr style={{ color: "black" }} />
            </b>

            {/* <button className='button' onClick={()=> getcart(arr)}> Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;

// category
// :
// "strength"
// exercise
// :
// "Lunges"
// gh-name
// :
// "gabrysia694     "
// id
// :
// 4
// image
// :
// "https://www.burnthefatinnercircle.com/members/images/2015.png?cb=20230213043730"
// instructions
// :
// Array(4)
// 0
// :
// "Stand with your feet hip-width apart and your hands on your hips."
// 1
// :
// "Take a big step forward with your right foot, lowering your body until your right thigh is parallel to the floor."
// 2
// :
// "Keep your left foot in place and your left knee hovering just above the ground."
// 3
// :
// "Push back up to the starting position and repeat on the other side, stepping forward with your left foot."
// length
// :
// 4
// [[Prototype]]
// :
// Array(0)
// price
// :
// 300
// videoLink
// :
// "https://www.youtube.com/watch?v=3XDriUn0udo&t=10s"
// [[Prototype]]
// :
// Object
