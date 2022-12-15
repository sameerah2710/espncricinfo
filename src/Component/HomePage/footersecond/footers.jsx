import React from 'react';
import "./footers.css"
import { Box, Flex, Image, Text, AspectRatio, Link } from "@chakra-ui/react";
const Footers=()=>{
   return(
      <div className="footers" style={{"height":"45px"}}>
        <div className="left">
            <Text>Terms of Use | Privacy Policy | Interest-Based Ads | Addendum to the Global Privacy Policy | Feedback</Text>
        </div>
        <div className="right">
        <Text>© 2022 ESPN Sports Media Ltd. All rights reserved</Text>
        </div>
      </div>
   )
}

export default Footers;