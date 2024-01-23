import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon/>
            <h1>FILTER</h1>
        </div>
        <hr/>

        <ChannelRow
            image="https://yt3.ggpht.com/yti/AGOGRCp3GbnEHOH-6ysrENUJ424BNoO5-yK8g9kqBWgiCw=s108-c-k-c0x00ffffff-no-rj"
            channel="PrasadVijayPawar"
            verified
            subs="11k"
            noOfVideos="11"
            description="im a vloger of maratha varriors"
         />
         <hr/>
         <VideoRow
         views="1000k"
         subs="11k"
         description="im a vloger of maratha varriors"
         timestamp="6 days ago"
         channel="PrasadVijayPawar"
         title="Story of Variours . ."
         image="https://yt3.ggpht.com/yti/AGOGRCp3GbnEHOH-6ysrENUJ424BNoO5-yK8g9kqBWgiCw=s108-c-k-c0x00ffffff-no-rj"
         />
         <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay shree ram 2024"
            channel="shreeram" 
            image="https://omreels.in/wp-content/uploads/2022/07/shri-ram-hd-wallpaper-for-mobile-md.jpg"
           />
            <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay hanuman 2024"
            channel="hanuman" 
            image="https://omreels.in/wp-content/uploads/2022/03/hanumanji-images-full-hd-m.jpg"
           />
            <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay shivray 2024"
            channel="chatrapati" 
            image="https://w0.peakpx.com/wallpaper/792/304/HD-wallpaper-jai-shivaji-chatrpati-shivaji-jai-bhavani-maharashtra-shivaji-maharaj.jpg"
           />
            <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay bholenath 2024"
            channel="bholenath" 
            image="https://t4.ftcdn.net/jpg/04/07/09/81/240_F_407098189_bsvghpdjLyI9Fr1tujQIxbAIVHh7Yrrz.jpg"
           />
            <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay ganesh 2024"
            channel="ganesh" 
            image="https://omreels.in/wp-content/uploads/2022/03/ganpati-photo-wallpaper-hd-sm.jpg"
           />
            <VideoRow
            views="4M"
            subs="15k"
            description="im a vloger of maratha varriors"
            timestamp="22 january"
            title="jay shambhuraje 2024"
            channel="shambhuraje" 
            image="https://w0.peakpx.com/wallpaper/662/675/HD-wallpaper-sambhaji-maharaj.jpg"
           />
    </div>
  )
}

export default SearchPage