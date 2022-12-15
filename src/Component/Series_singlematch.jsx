import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../Pages/Live_Scores/Blogs";
import ArticlesOfTeam from "../Pages/Teams/ArticlesOfTeam";
import CountryTeam from "../Pages/Teams/CountryTeam";
import FixtureResult from "../Pages/Teams/FixtureResult";
import RightSideBar from "../Pages/Teams/RightSideBar";
import Runner from "../Pages/Teams/runner";
import Wicketer from "../Pages/Teams/wicketer";
import { getArticlesData } from "../Redux/action";
import SeriesBlog from "./SeriesBlog";
import left from "./image/left.png"
import rightup from "./image/Rightup.png";
import Navbar from "./HomePage/Navbar/navbar";
import TopNavbar from "./HomePage/TopNavbar/TopNavbar";
import Footers from "./HomePage/footersecond/footers";


const Series_singlematch = ({ runner, wicketer }) => {
  const articles = useSelector((state) => state.articles);
  console.log(articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesData());
  }, []);
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <center>
      <img
        src="https://tpc.googlesyndication.com/simgad/9473507432203609842?"
        style={{ margin: "5%" }}
      />
      </center>
      <div style={{ display: "flex", gap: "25px", width: "100%" }}>
        <div style={{ width: "25%", height: "50px" }}>
          
          {/* <FixtureResult  /> */}
          <img src={left} style={{marginLeft:"10px" , paddingLeft:"30px"}} alt="" />
        </div>
        <div style={{ width: "45%" }}>
          {articles &&
            articles.map((item) => (
              <ArticlesOfTeam
                id={item.id}
                articles={item.title}
                content={item.description}
                url={item.urlToImage}
              />
            ))}
        </div>
        <div style={{ width: "3%" }}>
          {/* <SeriesBlog /> */}
          {/* <RightSideBar /> */}
          <div style={{ width: "320px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div>
                <img src="https://tpc.googlesyndication.com/simgad/605161044816525343?" />
              </div>
              <div>
                <img
                  src="https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220809/Rbi_ENG_1_300x250_8aug22_72879983397192489.jpg"
                  alt="aft"
                />
              </div>
              <div>
                <img src="https://tpc.googlesyndication.com/simgad/11639078905771269026?" />
              </div>
            </div>
            {/* <Runner runner={runner} /> */}
            {/* <Runner runner={runner} /> */}
            <img src={rightup} />
            {/* <Wicketer wicketer={wicketer} /> */}
            <Wicketer wicketer={wicketer} />

            {/* <TeamBlogs/> */}
          </div>
        </div>
      </div>
      <Footers/>
    </div>
  );
};

export default Series_singlematch;
