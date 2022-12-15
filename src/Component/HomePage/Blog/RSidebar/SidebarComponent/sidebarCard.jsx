import React from 'react'
import  './sidebarCard.css';
import {Link as Routelink} from "react-router-dom"

const data = [
  
  {
    id: 1,
    name:"BBL draft: Taylor, Hasnain in final batch"
  },
  {
    id: 2,
    name:"Lynn signs 11-game Strikers BBBL deal"
  },
  {
    id: 3,
    name:"Shubham Gill set to play for Glamorgan"
  },
  {
    id: 4,
    name:"Akram: Too early to compare Babar, Kohli"
  },
  {
    id: 5,
    name:"David Hemp to leave Pak Women job"
  },
  {
    id: 6,
    name:"Buzz: Rizwan shows off his shots"
  }

];
 const SidebarComponent = () => {

    return (
      <div className="component">
           <div className="LSBC" style={{}}>
          <h5>News Headlines</h5>
          <div>
          {data.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>>  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
     )}
          </div>
          
        </div>
      </div>
    )

}
export default SidebarComponent