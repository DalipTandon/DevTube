import React from "react";
import hamburger from "../img/hamburger.jpg"
import devtube from "../img/devtube.png"
import Profile from "../img/profile.jpg"
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch } from "react-redux";
const Head=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col  shadow-md  sticky top-0 bg-white z-10 ">
            <div className="flex col-span-1 gap-3">
                <img className="h-12 m-2 cursor-pointer px-3 " onClick={()=>toggleMenuHandler()} src={hamburger} alt="Menu"/>
              <a href="/">  <img className="h-20 w-28- cursor-pointer" src={devtube} alt="logo"/> </a>
            </div>
            <div className="col-span-10 m-2  flex justify-center items-center "> 
                <input className="  px-10 h-10 w-1/2 p-2 rounded-l-full border border-gray-500 " type="text" placeholder="Search"/>
                <button className="bg-gray-200 w-14 h-10 p-2 border border-gray-500 rounded-r-full"> 🔍</button>
            </div>
            <div className="col-span-1  flex justify-center">
                <img className="h-16 w-16 cursor-pointer" src={Profile} alt="profile"/>
            </div>
        </div>
    )
}

export default Head;