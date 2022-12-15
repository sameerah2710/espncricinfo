import React,{useEffect} from 'react';
import styled from 'styled-components';
import styles from './Blogs1.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { getArticlesData } from '../../Redux/action';
import ArticlesOfTeam from './ArticlesOfTeam';

const Blogs1 = ()=>{
   const articles = useSelector((state)=>state.articles);
   const dispatch = useDispatch();

   useEffect(()=>{
         dispatch(getArticlesData())
   },[])

   return(
      <BlogWrapper>
         <div>
            <div style={{marginBottom:"0.5rem"}}>
               <img src="https://tpc.googlesyndication.com/simgad/13223353124932635371?" />
            </div>
            <BlogsWrapper>
               <div>
                  <img
                   src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/272700/272724.6.jpg"
                  width='615px'
                  height='314px'
                  style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}
                   />
                   <div style={{padding:"20px",fontFamily:'BentonSans-Bold,Arial,Noto Sans,sans-serif'}}>
                     <div className={styles.headings}>
                     Asia Cup battles: Babar takes on Rashid, Kohli goes up against Hasaranga
                     </div>
                     <p>
                     With Asia's best going head to head in the UAE, here are four contests you do not want to miss
                     </p>
                   </div>
               </div>
            </BlogsWrapper>
            <div>
               {/* <ArticlesOfTeam articles={articles} /> */}
               {articles.map((item)=>
                  <ArticlesOfTeam key={item.id} id={item.id} articles={item.title} content={item.description} url={item.urlToImage} />
               )}
               {articles.map((item)=>
                  <ArticlesOfTeam key={item.id} id={item.id} articles={item.title} content={item.description} url={item.urlToImage} />
               )}
            </div>
         </div>
      </BlogWrapper>
   )
}
 
export default Blogs1;

const BlogWrapper = styled.div`
   width:615px;

   @media screen and (max-width: 768px){
      display:none;
   }
`

const BlogsWrapper = styled.div`
   margin:20px 0px 20px 0px;
   background-color:black;
   color:white;
   border-radius:10px;
   
`
