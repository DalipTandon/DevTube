import React from "react";

const Sidebar=()=>{
    return (
        <div className="col-span-1  shadow-md ">
            <ul className=" p-4 m-2 font-normal my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
                <li><i className="ri-home-2-fill"></i>Home</li>
                <li><i className="ri-movie-line"></i>Subscription</li>
                <li><i className="ri-slideshow-3-fill"></i>Shorts</li>
            </ul>
            <hr className="w-1/2 mx-5 p-1 font-bold"></hr>
            <h1 className=" px-4  font-semibold  text-xl ">Subscription</h1>
          <ul className=" p-4 m-2 font-normal  my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
            <li><i className="ri-anticlockwise-2-line"></i>History</li>
            <li><i className="ri-file-list-2-line"></i>Playlist</li>
            <li><i className="ri-movie-line"></i>Your Videos</li>
            <li><i className="ri-time-line"></i>Wactch later </li>
          </ul>
          <hr className="w-1/2 mx-5 p-1 font-bold"></hr>
          <h1 className=" px-4  font-semibold  text-xl ">Explore</h1>

          <ul className=" p-4 m-2 font-normal my-3 py-3 text-xl cursor-pointer gap-2 flex flex-col">
            <li><i className="ri-fire-line"></i>Trending</li>
            <li><i className="ri-shopping-bag-2-line"></i>Shopping</li>
            <li><i className="ri-netease-cloud-music-line"></i>Music</li>
            <li><i className="ri-file-list-2-line"></i>Movies</li>
            <li><i className="ri-file-list-3-line"></i>News</li>
            <li><i className="ri-gamepad-fill"></i>Games</li>
            <li><i className="ri-base-station-line"></i>Podcast</li>
          </ul>
        </div>
        
    )
}

export default Sidebar;