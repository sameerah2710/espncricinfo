import React from "react";
import Footers from "../../Component/HomePage/footersecond/footers";
import Navbar from "../../Component/HomePage/Navbar/navbar";
import Advertise from "./Advertise";
import Blogs from "./Blogs";
import Styles from "./LiveScore.module.css";
import MiddleContent from "./MiddleContent";

const LiveScore = () => {
  return (
    <div>
      <Navbar/>
      <Advertise />
      <div className={Styles.main}>
        <MiddleContent /> 
        <Blogs />
      </div>
      <Footers/>
    </div>
  );
};

export default LiveScore;
