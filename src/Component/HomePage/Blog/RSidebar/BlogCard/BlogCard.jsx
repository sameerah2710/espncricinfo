
import React from 'react'
import styles from "../rSbar.module.css"

const data = [
  {
    id: 1,
    link: "https://www.espncricinfo.com/ci/content/story/149816.html",
    src:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/294000/294030.jpg",
    title: "On This Day: Stokes' Headingley epic"
  },
  {
    id: 2,
    link: "https://www.espncricinfo.com/ci/content/quote/index.html",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344603.png",
    title: "Quote Unquote: who's saying what?"
  },
  {
    id: 3,
    link: "https://www.thecricketmonthly.com/story/1323704/photo-feature-helmets-in-cricket",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342200/342284.6.jpg",
    title: "Photo feature: helmets"
  },
  {
    id: 4,
    link: "https://www.espncricinfo.com/photo",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344500/344554.6.jpg",
    title: "The latest cricket photos"
  },
  {
    id: 5,
    link: "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets-can-anyone-match-mcgrath",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/151100/151163.3.jpg",
    title: "The 'real value' of wickets: can anyone match McGrath?"
  },
  {
    id: 6,
    link: "https://www.espncricinfo.com/genre/who-does-it-best-737",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/336000/336034.6.jpg",
    title: "Who does it best in women's cricket?"
  },
  {
    id: 7,
    link: "https://www.thecricketmonthly.com/story/1318940/photo-feature-stairs-and-cricket",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/340500/340544.6.jpg",
    title: "Photo feature: Stairs in cricket"
  },
  {
    id: 8,
    link: "https://www.espncricinfo.com/ci/engine/records/index.html",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/318700/318789.jpg",
    title: "Records index: most runs, most wickets, and a lot more"
  },
  {
    id: 9,
    link: "https://www.thecricketmonthly.com/story/1317779/temba-bavuma-i-understand-i-have-a-voice-and-the-influence-to-make-things-better-around-me",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/340200/340228.6.jpg",
    title: "Temba Bavuma: 'I understand I have the influence to make things better around me'"
  },
  {
    id: 10,
    link: "https://www.espncricinfo.com/ci/content/page/211271.html",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/339900/339937.6.jpg",
    title: "Rankings: Who's leading in every format"
  },
  {
    id:11,
    link:"https://www.thecricketmonthly.com/story/1315825/simon-taufel---people-think-that-the-way-to-solve-the-odd-grey-area-in-cricket-is-to-replace-it-with-technology",
    src:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/339900/339937.6.jpg",
    title:"Ranking : Who is liding in every format"
  }
 ];

 const BlogCard = () => {

    return (
      <div className={styles.topRunProvider}>
        {data.map((item)=>
         <div style={{padding:'20px',borderBottom:'1px solid lightgrey', width:'320px'}} onClick={item.link}>
            <img style={{borderRadius:"10px"}} src={item.src} alt='imGE' />
            <br/>
            <p>{item.title}</p>
         </div>
        )}
        <div> 
        </div>
      </div>
    )

}
export default BlogCard