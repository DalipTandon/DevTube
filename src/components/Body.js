import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Body=()=>{
    const isDark=useSelector((store)=>store.theme.isDark);
    return(
        <div  className={`flex min-h-screen transition-colors duration-500 ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}>
            <Sidebar />
            <Outlet/>
        </div>
    )
}

export default Body;