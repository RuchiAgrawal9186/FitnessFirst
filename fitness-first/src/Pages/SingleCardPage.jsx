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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleData(id));
  }, []);
  return (
    <div className="bg-grey-600 mt-[8%]">
      <div
        key={el.id}
        className="singlepage_Section rounded-xl "
        style={{
          width: "50%",
          margin: "auto",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
      >
        <h1 className="text-3xl text-orange-500 font-bold mb-4">
          Exercise Details
        </h1>

        <ReactPlayer url={el.videoLink} controls={true} />

        <div className="single_product_main_div grey-300">
          <div className="single_product_left_div">
            <img src={el.image} alt="altimage" />
          </div>

          <div className="single_product_right_div">
            <h2>exercise:{el.exercise}</h2>
            <b>
              <del>MRP ₹{el.price + 4599}</del>
            </b>
            <p style={{ color: "white" }}>price:{el.price}</p>
            {el.instructions && (
              <ol className="text-left list-decimal">
                {el.instructions.map((al) => (
                  <li> {al}</li>
                ))}
              </ol>
            )}
            <div>
              <b>
                <p>Categoty : {el.category}</p>
              </b>
            </div>
            <b>
              {" "}
              <hr style={{ color: "black" }} />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;


