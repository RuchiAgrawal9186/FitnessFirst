import React from "react";
import "./Articals.css";

const Articals = () => {
  return (
    <div className="Articals_section">
      <p className="artical_title"> Articals</p>
      <h1 style={{fontSize:"30px",margin:"2%"}}>Articals from tasking</h1>
      <div className="artical_div">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEBYJmenM7jp76aNOkTSQzW3nbaijF6Pq1mjA7tz6RQ&usqp=CAU&ec=48665699" alt="" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            mollitia maxime eius commodi et aut repellat nam vel temporibus
            consequuntur.
          </p>
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVRG92RdUVJAMY7mHDnH8MNKKUWPmw3bd_66LqdO4Vw&usqp=CAU&ec=48665699" alt="" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            mollitia maxime eius commodi et aut repellat nam vel temporibus
            consequuntur.
          </p>
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsB7Ms60gd3HCYnCi-IysxnFvxIZp7Hd33NUuezxYBQ&usqp=CAU&ec=48665699" alt="" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            mollitia maxime eius commodi et aut repellat nam vel temporibus
            consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articals;
