import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getInternationalTeamData, getWomenTeamData, getIplTeamData} from '../../Redux/action';
import Navbar from '../../Component/HomePage/Navbar/navbar';
import Footers from '../../Component/HomePage/footersecond/footers';
import TopNavbar from '../../Component/HomePage/TopNavbar/TopNavbar';

const Teams=()=>{
   const internationalTeam = useSelector((state)=>state.internationalTeam);
   const womenTeam = useSelector((state)=>state.womensTeam);
   const iplTeam = useSelector((state)=>state.iplTeam);
   const dispatch = useDispatch();  

   useEffect(()=>{   
      dispatch(getInternationalTeamData());
      dispatch(getWomenTeamData());
      dispatch(getIplTeamData());     
   },[])

   return(
      <div>
         <TopNavbar/>
         <Navbar/>
         <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
            <div>
               <div style={{padding:"10px",textAlign:"center"}}>
                  <img src="https://tpc.googlesyndication.com/simgad/931568015193886157?" alt="image_ads"/>
               </div>
            </div>
            <div>
                  <TeamWrapper>
                     <div style={{paddingLeft:"15px",fontWeight:"700"}}>
                        <h3>POPULAR INTERNATIONAL TEAMS</h3>
                     </div>
                     <InternationTeam>
                        {internationalTeam&&internationalTeam.map((item)=>
                        <Link to={`/Teams/${item.name}`} style={{textDecoration:"none"}} > 
                           <div key={item.id} style={{borderBottom:"1px solid lightgrey",borderRight:"1px solid lightgrey",padding:'18px',display:"flex",alignItems:"center"}}>
                              <div>
                                 <img src={item.img} width='48px' height='48px' alt='afghanistan' />
                              </div>
                              <span style={{fontWeight:"700",paddingLeft:"10px",fontSize:"1.1rem",color:"#383838"}}>{item.name}</span>
                           </div>
                        </Link>
                        )}
                        
                     </InternationTeam>
                  </TeamWrapper>
                  <br/>
                  <TeamWrapper>
                     <div style={{paddingLeft:"15px",fontWeight:"700"}}>
                        <h3>POPULAR WOMEN'S TEAMS</h3>
                     </div>
                     <InternationTeam>
                        {womenTeam?.map((item)=>
                        <Link to={`/Teams/${item.name}`} style={{textDecoration:"none"}} > 
                           <div key={item.id} style={{borderBottom:"1px solid lightgrey",borderRight:"1px solid lightgrey",padding:'18px',display:"flex",alignItems:"center"}}>
                              <div>
                                 <img src={item.img} width='48px' height='48px' alt='afghanistan' />
                              </div>
                              <span style={{fontWeight:"700",paddingLeft:"10px",fontSize:"1.1rem",color:"#383838"}}>{item.name}</span>
                           </div>
                           </Link>
                        )}
                        
                     </InternationTeam>
                  </TeamWrapper>
                  <br/>
                  <TeamWrapper>
                     <div style={{paddingLeft:"15px",fontWeight:"700"}}>
                        <h3>IPL 2022 TEAMS</h3>
                     </div>
                     <InternationTeam>
                        {iplTeam&&iplTeam.map((item)=>
                         <Link to={`/Teams/${item.name}`} style={{textDecoration:"none"}} > 
                           <div key={item.id} style={{borderBottom:"1px solid lightgrey",borderRight:"1px solid lightgrey",padding:'18px',display:"flex",alignItems:"center"}}>
                              <div>
                                 <img src={item.img} width='48px' height='48px' alt='afghanistan' />
                              </div>
                              <span style={{fontWeight:"700",paddingLeft:"10px",fontSize:"1.1rem",color:"#383838"}}>{item.name}</span>
                           </div>
                        </Link>
                        )}
                     </InternationTeam>
                  </TeamWrapper>
            </div>
         </div>
         <br/>
         <br/>
         <Footers/>
      </div>
   )
}

export default Teams;

const TeamWrapper = styled.div`
   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
   padding-top:0.5px;
   border-radius:5px;
`
const InternationTeam = styled.div`
   border-top:1px solid lightgrey;
   display:grid;
   grid-template-columns:repeat(3, 1fr);
   grid-template-rows:auto;
`


