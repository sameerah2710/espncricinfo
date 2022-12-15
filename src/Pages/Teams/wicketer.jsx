import React from 'react';
import TeamMember from './TeamMember';
import styles from './Blogs1.module.css';

const Wicketer = ({wicketer})=>{
   return (

         <div className={styles.topRunProvider}>
            <div className={styles.topRunHeading}>
               <div>TOP RUN SCORES</div>
               <div>IN LAST ONE YEAR</div>
            </div>
            <div className={styles.runnerType}>
               <div>
                  ODI
               </div>
               <div>
                  T201
               </div>
            </div>
            <div>
               {/* <TeamMember /> */}
               {wicketer?.map((item)=>
                  <TeamMember data={item} id={item.name} />
               )}
            </div>
            <div style={{padding:'10px',color:'skyblue',fontWeight:'bold',textAlign:"center"}}>
               View All States
            </div>
      </div>

   )
}

export default Wicketer;
