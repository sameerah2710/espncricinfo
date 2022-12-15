import React from "react";
import {NavLink} from "react-router-dom"
import { Heading, Box, Text } from "@chakra-ui/react";
import { ArrowDownIcon} from '@chakra-ui/icons'
import styles from "./Series.module.css";
import SeriesBlog from "./SeriesBlog";
import Navbar from "./HomePage/Navbar/navbar";
import Footers from "./HomePage/footersecond/footers";
import TopNavbar from "./HomePage/TopNavbar/TopNavbar";

const Recently = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>
      
      <Box className={styles.outerbox}>
          <img src="https://tpc.googlesyndication.com/simgad/12856453960124024269?" width='93%' style={{paddingLeft:"75px" , marginBottom:"-40px", paddingTop:"20px"}} />
        
  
        <div className={styles.blogbox} style={{marginTop:'50px'}}>
        <SeriesBlog />
        </div>
        <Box className={styles.heading2} style={{marginTop:"-500px"}}>
          
          <Text fontSize="md"><NavLink to="/Series" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Current Cricket</NavLink></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <NavLink to="/future_matches" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Future Series / Tournaments</NavLink> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" ><NavLink to="/recently" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Recently Concluded</NavLink></Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"15px"}}>
            <h4>Zimbabwe v Bangladesh</h4>
            
            <h4>Ireland v Afghanistan</h4>
            <h4>West Indies v India</h4>
            <h4> Sri Lanka v Pakistan</h4>
            <h4> Netherlands v New Zealand</h4>
            <h4> SA-W in England</h4>
            <h4> Scotland v New Zealand</h4>
            <h4> IRE Tri-Series (Women)</h4>
            <h4> Ireland v New Zealand</h4>
            <h4>England v India</h4>
            <h4> West Indies v Bangladesh</h4>
            <h4> Sri Lanka v Australia</h4>
            <h4>IND-W in Sri Lanka</h4>
            <h4>Ireland v India</h4>
            <h4>England v India (5th Test)</h4>
            <h4> Netherlands v England</h4>
            <h4> England v New Zealand</h4>
            <h4> AUS-A in Sri Lanka</h4>
            <h4> India v South Africa</h4>
            
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px" ,marginTop:"30px"}}>ASSOCIATE CRICKET</Text>
            <div style={{lineHeight:"30px"}}>
            <h4>ICC Men's T20 World Cup</h4>
            <h4>Canada v Nepal</h4>
            <h4>Austria v Hungary</h4>
            <h4>Sofia T20</h4>
            <h4>Finland v Estonia</h4>
            <h4>Bulgaria v Serbia</h4>
            <h4>Namibia Tri-Series</h4>
            
            </div>
            

            </Box>
            </Box>
        
      </Box>
      <br/>
      <Footers/>
    </div>
  );
};

export default Recently;
