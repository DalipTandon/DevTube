import React from "react";
import { useSelector } from "react-redux";

const Sidebar=()=>{
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen)return null;
    return (
        <div className=" w-56  shadow-md h-screen sticky top-0">
            <ul className=" p-4 m-2 font-normal my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
                <li><i className="ri-home-2-fill mx-3"></i>Home</li>
                <li><i className="ri-movie-line mx-3"></i>Subscription</li>
                <li><i className="ri-slideshow-3-fill mx-3"></i>Shorts</li>
            </ul>
            <hr className="w-1/2 mx-5 p-1 font-bold"></hr>
            <h1 className=" px-4  font-semibold  text-xl ">Subscription</h1>
          <ul className=" p-4 m-2 font-normal  my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
            <li><i className="ri-anticlockwise-2-line mx-3"></i>History</li>
            <li><i className="ri-file-list-2-line mx-3"></i>Playlist</li>
            <li><i className="ri-movie-line mx-3"></i>Your Videos</li>
            <li><i className="ri-time-line mx-3"></i>Wactch later </li>
          </ul>
          <hr className="w-1/2 mx-5 p-1 font-bold"></hr>
          <h1 className=" px-4  font-semibold  text-xl ">Explore</h1>

          <ul className=" p-4 m-2 font-normal my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
            <li><i className="ri-fire-line mx-3"></i>Trending</li>
            <li><i className="ri-shopping-bag-2-line mx-3"></i>Shopping</li>
            <li><i className="ri-netease-cloud-music-line mx-3"></i>Music</li>
            <li><i className="ri-file-list-2-line mx-3"></i>Movies</li>
            <li><i className="ri-file-list-3-line mx-3"></i>News</li>
            <li><i className="ri-gamepad-fill mx-3"></i>Games</li>
            <li><i className="ri-base-station-line mx-3"></i>Podcast</li>
          </ul>
        </div>
        
    )
}

export default Sidebar;