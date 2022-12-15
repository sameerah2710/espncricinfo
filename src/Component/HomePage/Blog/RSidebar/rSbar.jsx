import React from 'react'
import SidebarComponent from './SidebarComponent/sidebarCard'
import BlogCard from './BlogCard/BlogCard'
import styles from "./rSbar.module.css"


 const RSBar = () => {

    return (
      <div>
       <SidebarComponent/>
        <BlogCard />
      </div>
    )

}
export default RSBar