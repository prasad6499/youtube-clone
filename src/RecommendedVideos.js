import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>RecommendedVideos</h2>
        <div className='RecommendedVideos_videos'>
            <VideoCard
            title="jay shree ram 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://omreels.in/wp-content/uploads/2022/07/shri-ram-hd-wallpaper-for-mobile-md.jpg"
            channel="shreeram" 
            image="https://omreels.in/wp-content/uploads/2022/07/shri-ram-hd-wallpaper-for-mobile-md.jpg"
           />
            <VideoCard
            title="jay hanuman 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://omreels.in/wp-content/uploads/2022/03/hanumanji-images-full-hd-m.jpg"
            channel="hanuman" 
            image="https://omreels.in/wp-content/uploads/2022/03/hanumanji-images-full-hd-m.jpg"
           />
            <VideoCard
            title="jay shivray 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://w0.peakpx.com/wallpaper/792/304/HD-wallpaper-jai-shivaji-chatrpati-shivaji-jai-bhavani-maharashtra-shivaji-maharaj.jpg"
            channel="chatrapati" 
            image="https://w0.peakpx.com/wallpaper/792/304/HD-wallpaper-jai-shivaji-chatrpati-shivaji-jai-bhavani-maharashtra-shivaji-maharaj.jpg"
           />
            <VideoCard
            title="jay bholenath 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://t4.ftcdn.net/jpg/04/07/09/81/240_F_407098189_bsvghpdjLyI9Fr1tujQIxbAIVHh7Yrrz.jpg"
            channel="bholenath" 
            image="https://t4.ftcdn.net/jpg/04/07/09/81/240_F_407098189_bsvghpdjLyI9Fr1tujQIxbAIVHh7Yrrz.jpg"
           />
            <VideoCard
            title="jay ganesh 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://omreels.in/wp-content/uploads/2022/03/ganpati-photo-wallpaper-hd-sm.jpg"
            channel="ganesh" 
            image="https://omreels.in/wp-content/uploads/2022/03/ganpati-photo-wallpaper-hd-sm.jpg"
           />
            <VideoCard
            title="jay shambhuraje 2024"
            views="4M"
            timestamp="22 january"
            channelImage="https://w0.peakpx.com/wallpaper/662/675/HD-wallpaper-sambhaji-maharaj.jpg"
            channel="shambhuraje" 
            image="https://w0.peakpx.com/wallpaper/662/675/HD-wallpaper-sambhaji-maharaj.jpg"
           />
        </div>
    </div>
  )
}

export default RecommendedVideos