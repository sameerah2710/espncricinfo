import React from 'react';
import Runner from './runner';
import Wicketer from './wicketer';
import TeamBlogs from './TeamBlogs';

const RightSideBar = ({runner,wicketer})=>{

   return(
      <div  style={{width:"320px"}}>
        <div style={{display:"flex",flexDirection:'column',gap:"15px"}}>
         <div>
            <img src="https://tpc.googlesyndication.com/simgad/605161044816525343?" />
         </div>
         <div>
            <img src='https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220809/Rbi_ENG_1_300x250_8aug22_72879983397192489.jpg' alt='aft'/>
         </div>
         <div>
            <img src='https://tpc.googlesyndication.com/simgad/11639078905771269026?'/>
         </div>
        </div>
        <Runner runner={runner} />
        <Wicketer wicketer={wicketer} />
        <TeamBlogs/>
      </div>
   )
}

export default RightSideBar;