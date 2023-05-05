import React from "react";
import Slider from "../components/Slider/Slider";
import Articals from "../components/Articals/Articals";




// fitness-first\src\assets\rightArrow.png
// Programs Data

import Reason from "../components/Reasons/Reason";
import HomeMid from "../components/HomeMid";

const HomePage = () => {
  return (
    <div>
      {/* Programs */}
      <HomeMid />
      <Reason />
      <Articals />
      <Slider />
    </div>
  );
};

export default HomePage;
