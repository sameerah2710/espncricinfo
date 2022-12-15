import React from 'react'
import './lSidebar.css'
import {Link as Routelink} from "react-router-dom"


const data1 = [
  {
    "id": 1,
    "name":"Zimbabwe v India"
  },
  {
    "id": 2,
    "name":"Asia Cup QLF"
  },
  {
    "id": 3,
    "name":"Asia Cup"
  },
  {
    "id": 4,
    "name":"England v South Africa"
  },
  {
    "id": 5,
    "name":"West Indies v New Zealand"
  },
  {
    "id": 6,
    "name":"Australia v Zimbabwe"
  },
  {
    "id": 7,
    "name":"The Hundred (M)"
  },
  {
    "id": 8,
    "name":"The Hundred (F)"
  },
  {
    "id": 9,
    "name":"Country Div1"
  },
  {
    "id": 10,
    "name":"Country Div2"
  },
  {
    "id":11,
    "name":"6IXTY (M)"
  },
  {
    "id": 12,
    "name":"6IXTY (F)"
  },
  {
    "id": 13,
    "name":"Women's Championship"
  },
  {
    "id": 14,
    "name":"World Test Championship"
  },
  {
    "id": 15,
    "name":"World Cup Super League"
  }
];
const data2 = [
  {
    "id": 1,
    "name":"T20 Time Out"
  },
  {
    "id": 2,
    "name":"T20 Time Out Hindi"
  },
  {
    "id": 3,
    "name":"ICC Rankings"
  },
  {
    "id": 4,
    "name":"Fantasy Pick"
  },
  {
    "id": 5,
    "name":"Haan Ya Naa"
  }
];
const data3 = [
  {
    "id": 1,
    "name":"Android App"
  },
  {
    "id": 2,
    "name":"iOS App"
  }
];
const data4 = [
  {
    "id": 1,
    "name":"Instagram"
  },
  {
    "id": 2,
    "name":"Twitter"
  },
  {
    "id": 3,
    "name":"Facebook"
  },
  {
    "id": 4,
    "name":"Youtube"
  }
];
const data5 = [
  {
    "id": 1,
    "name":"The Cricket Monthly"
  },
  {
    "id": 2,
    "name":"ESPN"
  }
];
 const LSBar = () => {

    return (
      <div className="LSBCONT">
        
        <div className="LSBC" style={{}}>
          <h4>Key Series</h4>
          
          <div>
          {data1.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink> </p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h4>QuickLinks</h4>
          <div>
          {data2.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h4>ESPN Quick Info App</h4>
          <div>
          {data3.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h4>Follow ESPN cricinfo</h4>
          <div>
          {data4.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h4>ESPN sites</h4>
          <div>
          {data5.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
      </div>
    )

}
export default LSBar
