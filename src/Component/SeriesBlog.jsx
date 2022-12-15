import React, { useEffect, useState } from "react";
import Styles from "./SeriesBlog.module.css";

const SeriesBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=035971f86c424adeb5ef8a805d1a0297"
    );
    const payload = await res.json();
    // console.log(payload.articles);

    setData(payload.articles);
  };
  return (
    <div className={Styles.main}>
      <img src="https://tpc.googlesyndication.com/simgad/11639078905771269026?"/>
      <div className={Styles.inner}>
        <Box />
      </div>
      {data?.map((el, index) => (
        <div className={Styles.inner} key={index}>
          <img src={el.urlToImage} alt="article_image" />
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SeriesBlog;

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
