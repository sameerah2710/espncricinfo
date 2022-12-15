import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CountryTeam from './Teams/CountryTeam';
import Teams from './Teams/teams';
import Series from '../Component/Series';
import Future from '../Component/Future';
import Recently from '../Component/Recently';
import LiveScore from "./Live_Scores/LiveScore";
import Homepage from '../Component/HomePage/Homepage';
import News from './News/news';
import BallTampering from './News/subnews/BallTampering';
import Rasim from './News/subnews/Racism';
import Technologyincricket from './News/subnews/Technologyincricket';
import Feature from './Feature/Features/Feature';
import Gallery from './Feature/Features/Gallery';
import Writer from './Feature/Features/Writers';
import Series_singlematch from '../Component/Series_singlematch';


const MainRoutes = ()=>{
   return(
      <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/Teams' element={<Teams/>} />
         <Route path='/Teams/:name' element={<CountryTeam/>} />
         <Route path="/Series" element={<Series/>}/>
         <Route path='/Series_singlematch' element={<Series_singlematch/>} />
         <Route path="/Future_matches"  element={<Future/>}/>
         <Route path="/recently" element={<Recently/> }/>
         <Route path="/livescore" element={<LiveScore />} />
         <Route path="/news" element={<News/>} />
         <Route path='/news/BallTampering' element={<BallTampering/>} />
         <Route path="/news/Recism" element={<Rasim/>} />
         <Route path="/news/technologyincricket" element={<Technologyincricket/>} />
         <Route path="/features" element={<Feature/>} />
         <Route path="/features/gallery" element={<Gallery/>} />
         <Route path='/features/Writers' element={<Writer/>}/>
      </Routes>
   )
}
export default MainRoutes;
