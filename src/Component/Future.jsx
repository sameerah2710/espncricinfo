import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Box, Text } from "@chakra-ui/react";
import styles from "./Series.module.css";
import Blogs from "../Pages/Live_Scores/Blogs";
import SeriesBlog from "./SeriesBlog";
import Navbar from "./HomePage/Navbar/navbar";
import Footers from "./HomePage/footersecond/footers";
import TopNavbar from "./HomePage/TopNavbar/TopNavbar";

const Future = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>

      <Box className={styles.outerbox}>
        <img
          src="https://tpc.googlesyndication.com/daca_images/simgad/532420073875604930" width='93.5%'
          style={{ paddingLeft: "70px", paddingTop: "20px" }}
        />
        <div className={styles.blogbox}>
          <SeriesBlog />
        </div>
        <Box className={styles.heading2} style={{ marginTop: "-520px" }}>
          <Text fontSize="md">
            <NavLink
              to="/Series"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              Current Cricket
            </NavLink>
          </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md">
            {" "}
            <NavLink
              to="/future_matches"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              Future Series / Tournaments
            </NavLink>{" "}
          </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md">
            <NavLink
              to="/recently"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              Recently Concluded
            </NavLink>
          </Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content}>
          <Box>
            <Text
              fontSize="lg"
              fontWeight="bold"
              style={{ marginBottom: "15px" }}
            >
              INTERNATIONAL TOURS
            </Text>
            <div style={{ lineHeight: "10px" }}>
              <h4>Zimbabwe v Bangladesh</h4>
              <h4>Ireland v Afghanistan</h4>
              <h4>West Indies v India</h4>
              <h4>Sri Lanka v Pakistan</h4>
              <h4>Netherlands v New Zealand</h4>
              <h4>SA-W in England</h4>
              <h4>Scotland v New Zealand</h4>

              <h4>West Indies tour of Australia, Oct 2022</h4>
              <h4>England tour of Australia, Oct 2022</h4>
              <h4>India tour of New Zealand, Nov 2022</h4>
              <h4>South Africa tour of Australia, Dec 2022</h4>
              <h4>Bangladesh Women tour of New Zealand, Dec 2022</h4>
              <h4>England tour of New Zealand, Feb 2023</h4>
              <h4>Sri Lanka tour of New Zealand, Mar 2023</h4>
            </div>

            <Text
              fontSize="lg"
              fontWeight="bold"
              style={{ marginBottom: "15px", marginTop: "30px" }}
            >
              INTERNATIONAL TOURNAMENTS
            </Text>
            <div style={{ lineHeight: "30px" }}>
              <h4>ICC Men's T20 World Cup</h4>
            </div>
          </Box>
        </Box>
      </Box>
      <br/>
      <Footers/>
    </div>
  );
};

export default Future;
