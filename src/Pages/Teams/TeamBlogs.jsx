import React from 'react';
import styles from './Blogs1.module.css';

const data = [
   {
      id:"1",
      title:"On This Day: Happy Birthday, Tino Best",
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/188400/188455.3.jpg"
   },
   {
      id:"2",
      title:"Quote Unquote, who's is saying what?",
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344603.png"
   },
   {
      id:"3",
      title:"Photo features: helmet",
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342200/342284.6.jpg"
   },
   {
      id:"4",
      title:"The latest cricket photos",
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344500/344554.6.jpg"
   },
   {
      id:"5",
      title:"The 'real value' of wickets: can anyone match McGrath?",
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/151100/151163.3.jpg"
   }
]
//console.log(data[0].image)
const TeamBlogs = ()=>{
   return (
      <div className={styles.topRunProvider}>
        {data.map((item)=>
         <div style={{padding:'20px',borderBottom:'1px solid lightgrey'}}>
            <img style={{borderRadius:"10px"}} width="255px" src={item.image} alt='imGE' />
            <br/>
            <p>{item.title}</p>
         </div>
        )}
        <div>
         
        </div>
      </div>
   )
}

export default TeamBlogs;