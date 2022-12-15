import React from "react";
import Styles from "./Timeline.module.css";

const Timeline = () => {
  const mappingData = ["Today", "Upcoming", "Result"];

  return (
    <div className={Styles.main}>
      {mappingData.map((el, index) => (
        <p key={index} className={Styles.heading}>
          {el}
        </p>
      ))}
    </div>
  );
};

export default Timeline;
