import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import { getUsers } from "../../Redux/DataReducer/action";
import axios from "axios";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const [data, setdata] = useState([]);
  const getdata = () => {
    axios
      .get(`https://userandtrainer-u0yp.onrender.com/trainers`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <> 
        <div className="grid grid-cols-3 gap-8">
          {data.length > 0 &&
            data.map((el) =>{ 
              if(el.id ===5){
                return ""
              }
            return <TrainerCard key={el.id} {...el} />
            })}
        </div>
    </>
  );
};

export default Trainers;
