import React from "react";
import Matches from "./Matches";
import Styles from "./MiddleContent.module.css";
import Timeline from "./Timeline";

const MiddleContent = () => {
  return (
    <div className={Styles.main}>
      <Timeline />
      <Matches/>
    </div>
  );
};

export default MiddleContent;
