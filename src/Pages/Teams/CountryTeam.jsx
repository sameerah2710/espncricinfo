import React, {useEffect} from 'react';
import Blogs1 from './Blogs1';
import FixtureResult from './FixtureResult';
import RightSideBar from './RightSideBar';
import {useDispatch, useSelector} from 'react-redux';
import {getInternationalTeamData, getWomenTeamData, getIplTeamData} from '../../Redux/action';
import {useParams} from 'react-router-dom';
import TopNavbar from '../../Component/HomePage/TopNavbar/TopNavbar';
import Navbar from '../../Component/HomePage/Navbar/navbar';
import Footers from '../../Component/HomePage/footersecond/footers';

const CountryTeam = ()=>{
   const internationalTeam = useSelector((state)=>state.internationalTeam);
   const womenTeam = useSelector((state)=>state.womensTeam);
   const iplTeam = useSelector((state)=>state.iplTeam);
   const dispatch = useDispatch();  
   const {name} = useParams();

   let data = [];

   if(internationalTeam.filter((item)=>{return item.name === name}).length!==0){
      data = internationalTeam.filter((item)=>{return item.name === name})
   }else if(womenTeam.filter((item)=>{return item.name === name}).length!==0){
      data = womenTeam.filter((item)=>{return item.name === name});
   }else{
      data = iplTeam.filter((item)=>{return item.name === item })
   }
 

   useEffect(()=>{   
      dispatch(getInternationalTeamData());
      dispatch(getWomenTeamData());
      dispatch(getIplTeamData());
   },[])

   return(
      <div>
         <TopNavbar/>
         <Navbar/>
         <div>
            <div style={{display:"flex",padding:"18px"}}>
               <div style={{display:"flex",flexDirection:'row',gap:'10px',marginRight:'20px'}}>
                  <img src={data[0].img} width='20px' height='20px' />
                  <span style={{fontWeight:"bold",color:"rgba(43,44,45)"}}>{name}</span>
               </div>
               <div style={{display:"flex",flexDirection:"row",gap:'20px',paddingLeft:"20px",color:"#48494A"}}>
                  <div style={{fontWeight:"bold"}}>Home</div>
                  <div>Fixtures and Results</div>
                  <div>Players</div>
                  <div>Stats</div>
                  <div>Videos</div>
                  <div>Squads</div>
                  <div>Galleries</div>
                  <div>Photos</div>
               </div>
            </div>
         </div>
         <div>
            <div style={{padding:"10px",display:"flex",justifyContent:"center"}}>
               <img src='https://tpc.googlesyndication.com/simgad/10994949654465411539?' alt="imageOf Cricket"/>
            </div>
         </div>
         <div style={{display:"flex",padding:'20px',gap:"20px"}}>
           {data.map((item)=>
            <>
               <FixtureResult details={item.details}  />
               <Blogs1/>
               <RightSideBar wicketer={item.top_wicket_takers} runner={item.top_run_scores} />
            </>
           )}
         </div>
         <Footers/>
      </div>
   )
}

export default CountryTeam;
