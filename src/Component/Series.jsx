import React from "react";
import {Link , NavLink} from "react-router-dom"
import { Heading, Box, Text, color } from "@chakra-ui/react";
import { ArrowDownIcon} from '@chakra-ui/icons'
import styles from "./Series.module.css";
import Blogs from "../Pages/Live_Scores/Blogs";
import SeriesBlogs from "./SeriesBlog";
import SeriesBlog from "./SeriesBlog";
import Navbar from "./HomePage/Navbar/navbar";
import Footers from "./HomePage/footersecond/footers";
import TopNavbar from "./HomePage/TopNavbar/TopNavbar";

const Series = () => {
  return (
    <div className={styles.container}>
      <TopNavbar/>
      <Navbar/>

      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>
      
      <Box className={styles.outerbox}>
        <img src="https://tpc.googlesyndication.com/daca_images/simgad/532420073875604930" width='93%'  style={{paddingLeft:"70px" , paddingTop:"20px",paddingBottom:"-100px"}}/>
        <img style={{marginLeft:"78%" , width:"20%", marginTop:"20px" }} src="https://tpc.googlesyndication.com/simgad/10028855014806727821?" alt="" />
        <div className={styles.blogbox}>
          <SeriesBlog /> 
        </div>
        
        <Box className={styles.heading2} >
          <Text fontSize="md"><NavLink to="/Series" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Current Cricket</NavLink></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <NavLink to="/future_matches" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Future Series / Tournaments</NavLink> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md"> <NavLink to="/recently" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Recently Concluded</NavLink></Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content} >
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"10px"}}>
            <h4><NavLink style={{textDecoration:"none"}} to="/Series_singlematch">England v South Africa</NavLink> </h4>
            <h4>Zimbabwe v India</h4>
            <h4>West Indies v New Zealand</h4>
            <h4>Netherlands v Pakistan</h4>
            <h4>Australia v Zimbabwe</h4>
            <h4>BAN-A in West Indies</h4>
            <h4>SL U-19s in ENG</h4>
            <h4>IRE-W in NL</h4>
            </div>
            

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>INTERNATIONAL TOURNAMENTS</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>Asia Cup Qualifier</h4>
            <h4>Asia Cup 2022</h4>
            <h4>CWC Challenge Group A</h4>
            <h4>CWC Challenge Group B</h4>
            
            </div>
            <ArrowDownIcon style={{marginTop:"1100px"}} />
          </Box>
          <Box className={styles.vertical}></Box>
          <Box style={{marginLeft:"-90px"}}>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>ICC TOURNAMENTS</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>ICC Women's Championship</h4>
            <h4>Men's Cricket World Cup League 2</h4>
            <h4>CWC Challenge League Group A</h4>
            <h4>CWC Challenge League Group B</h4>
            <h4>ICC CWC Super League</h4>
            <h4>ICC World Test Championship</h4>
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>T20/T10 TOURNAMENTS</Text>
            <div style={{lineHeight:"15px"}}>
            <h4>Asia Cup 2022</h4>
            <h4>SLC T20</h4>
            <h4>Maharaja T20</h4>
            <h4>6IXTY (W)</h4>
            <h4>6IXTY (M)</h4>
            <h4>T20 QUAD (in UAE)</h4>
            <h4>Namibia T20</h4>
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>ASSOCIATE CRICKET</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>Kenya v Nepal</h4>
            <h4>Bahrain v Kuwait</h4>
            <h4>ITA-W in Austria</h4>
            <h4>Continental Cup</h4>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>AUSTRALIA DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>Sheffield Shield</h4>
            <h4>The Marsh Cup</h4>
            <h4>BBL 2022</h4>
            <h4>WBBL 2022</h4>
            <h4>WNC League</h4>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>ENGLAND DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h5>County Div1</h5>
            <h5>County Div2</h5>
            <h5>100 (Men's)</h5>
            <h5>100 (Women's)</h5>
            <h5>RL Cup</h5>
            <h5>Vitality Blast</h5>
            <h5>RHF Cup</h5>
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>NEW ZEALAND DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>Plunket Shield</h4>
            <h4>Ford Trophy</h4>
            <h4>Women's 1-Day</h4>
            
            
            </div>
            <Text fontSize="lg" fontWeight="bold" style={{marginTop:'35px' , marginBottom:"15px"}}>WEST INDIES DOMESTIC</Text>
            <div style={{lineHeight:"10px"}}>
            <h4>6IXTY (W)</h4>
            <h4>6IXTY (M)</h4>
            <h4>CPL 2022</h4>
            <h4>WCPL 2022</h4>
            
            
            </div>
            
          </Box>
          
        </Box>
        
      </Box>
      <Footers/>
    </div>
  );
};

export default Series;
