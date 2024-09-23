import React, { useEffect, useState } from "react";
import hamburger from "../img/hamburger.jpg"
import devtube from "../img/devtube.png"
import Profile from "../img/profile.jpg"
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_API } from "../utils/config";
import { cacheResult } from "../utils/SearchSlice";
// import { cacheResult } from "../utils/SearchSlice";
const Head=()=>{
    const[search,setSearch]=useState("");
    const[suggestions,setSuggestions]=useState([]);
    const[isVisible,setIsVisile]=useState(false);
    const searchCache=useSelector((store)=>store.search);
  useEffect(()=>{
    
const fn=setTimeout(()=>{
    if(searchCache[search]){
        setSuggestions(searchCache[search]);
    }else{
   getSearch();
    }
},200)
  
return()=>{
    clearTimeout(fn);
}
  },[search]);

  const getSearch=async()=>{
    const data=await fetch(SEARCH_API+search);
    const json=await data.json();

    setSuggestions(json[1]);
   dispatch(
    cacheResult({
    [search]:json[1],
   }));
  }
    
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
            <div>
            <div className="col-span-10 mt-2  flex justify-center items-center "> 
                <input className="  px-10 h-10 w-full p-2 rounded-l-full border border-gray-500 " type="text"
                 placeholder="Search"
                 value={search}
                 onChange={(e)=>setSearch(e.target.value)}
                 onFocus={()=>setIsVisile(true)}
                 onBlur={()=>setIsVisile(false)}
                 />
                <button className="bg-gray-200 w-14 h-10 p-2 border border-gray-500 rounded-r-full"> 🔍</button>
            </div>
            {isVisible&&(
            <div className=" fixed w-1/3 pl-1 ml-6 rounded-lg">
            {suggestions.map((s,index)=><p key={index} className=" text-lg px-4  py-2 mx-4 font-semibold bg-white hover:bg-gray-100 " ><i className="ri-search-line mx-2"></i>{s}</p>)}
               
            </div>
            )}
            </div>
            <div className="col-span-1  flex justify-center">
                <img className="h-16 w-16 cursor-pointer" src={Profile} alt="profile"/>
            </div>
        </div>
    )
}

export default Head;