import React, { useEffect, useState } from "react";
import Styles from "./Blogs.module.css";

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:8080/articles");
    const payload = await res.json();
    // console.log(payload);

    setData(payload);
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.inner}>
        <Box />
      </div>
      {data
        .filter((el, index) => index < 8)
        .map((el, index) => (
          <div className={Styles.inner} key={index}>
            <img src={el.urlToImage} alt="" />
            <p>{el.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Blogs;

export const Box = () => {
  return (
    <div>
      <div>
        <h5 className={Styles.heading}>QUICK LINKS</h5>
        <hr />
      </div>
      <div>
        <div>
          <iconify-icon
            inline
            icon="mdi:scoreboard"
            style={{ color: "royalblue", marginLeft: "1rem" }}
            width="20"
          ></iconify-icon>
          <span className={Styles.span}>Desktop Scoreboard</span>
          <p className={Styles.span}>
            A mini scoreboard that stays with you and updates all the current
            matches
          </p>
        </div>
        <div>
          <iconify-icon
            inline
            icon="eva:refresh-fill"
            style={{ color: " royalblue", marginLeft: "1rem" }}
            width="20"
          ></iconify-icon>
          <span className={Styles.span}>Series Archive</span>
          <br />
          <br />
        </div>
        <div>
          <iconify-icon
            inline
            icon="akar-icons:arrow-right"
            style={{ color: "royalblue", marginLeft: "1rem" }}
            width="20"
          ></iconify-icon>
          <span className={Styles.span}>International Calender</span>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
