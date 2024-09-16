import React from "react";

const ButtonList=()=>{
    const list=["All","Music","News","Luxary Vehicles","Computer","podcast","Google","Apple","Live","Street Food","Cricket","Basketball","Movtivation","High School DXD","Overflow","music","Street Food","Cricket","Basketball","Movtivation","High School DXD","Overflow","music"]
    return (
        
        <div className="h-18 p-4 my-5 mx-5 flex space-x-2  overflow-x-scroll  no-scrollbar gap-2 ">
            {list.map((li,index)=>{
            return    <button key={index}  className={`text-sm font-semibold border border-gray-200  px-3 py-2 rounded-md whitespace-nowrap  ${
                index === 0 ? "bg-black text-white" : "bg-gray-200 text-black hover:bg-gray-400"
              }`}>{li}</button>
            })}
        </div>
    )
}

export default ButtonList;