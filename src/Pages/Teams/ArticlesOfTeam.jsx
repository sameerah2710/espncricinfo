import { GridItem } from '@chakra-ui/react';
import React from 'react';
import styles from './Blogs1.module.css';

const ArticlesOfTeam = ({id,articles,content,url})=>{
   
   
   return (
      <div className={styles.blogs_articles} key={id}>
         <img style={{borderRadius:"10px"}} width='189px' height='106px' src={url} alt=""/>
         <div className={styles.container_blogs}> 
            <div>{articles}</div>
            <div>{content}</div>
         </div>
      </div>
   )
}

export default ArticlesOfTeam;