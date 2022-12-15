import React from 'react';
import styled from 'styled-components';
import styles from './fixture.module.css';

const FixtureResult = ({details})=>{

   return(
      <FixtureResultWrapper>
         <div style={{padding:"10px"}}>
            <div className={styles.fixtures_result}>
               <div>
                  Fixtures
               </div>
               <div>
                  Results
               </div>
            </div>
         </div>
        {details?.map((item)=>
         <div key={item.day_data_time} style={{marginBottom:"0.5rem",paddingBottom:"0.75rem",borderBottom:"1px solid lightgrey"}}>
            <div className={styles.heading_fixture}>
               <span>{item.day_date_time}</span>
               <div>{item.team_group}</div>
            </div>
            <div style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>
               <div style={{display:"flex",flexDirection:"row",marginBottom:"0.5rem"}}>
                  <img style={{marginRight:"0.5rem"}} width="20px" height="20px" src={item.country1_code_img} alt="afg"/>
                  <span className={styles.name_section_cntry}>{item.country1_code}</span>
               </div>
               <div style={{display:"flex",flexDirection:"row",marginBottom:"0.5rem"}}>
                  <img style={{marginRight:"0.5rem"}} width="20px" height="20px" src={item.country2_code_img} alt="ban" />
                  <span className={styles.name_section_cntry}>{item.counry2}</span>
               </div>
            </div>
            <div class={styles.match_begin}>
              Match yet to begin
            </div>
         </div> 
        )}
         <div style={{color:"#04c8f5",textAlign:"center",fontWeight:"bold",cursor:"pointer"}}>
            View All Features
         </div>
      </FixtureResultWrapper>
   )
}

export default FixtureResult;

const FixtureResultWrapper = styled.div`
   width:264px;
   padding:15px;
   height:815px;
   border-radius:5px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
