import React from 'react';
import styles from './TeamMember.module.css';

const TeamMember = ({data})=>{
   
   return (
      <div className={styles.teamMember}>
         <div>
            <img width='64px' height='64px' style={{borderRadius:'50%'}} src={data.image} alt='cricketer'/>
         </div>
         <div style={{display:'flex',flexDirection:"column"}}>
            <div className={styles.textDecor}>
               <span>{data.name}</span>
               <span>{data.code}</span>
            </div>
            <div>
               <div>{data.wicket || data.runs}</div>
               <div style={{color:'grey',fontSize:"0.75rem"}}>
                  Innings: {data.innings} &nbsp; &nbsp; Average: {data.average}
               </div>
            </div>
         </div>
      </div>
   )
}

export default TeamMember;