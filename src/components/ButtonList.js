import React from "react";

const ButtonList=()=>{
    const list=["All","Music","News","Luxary Vehicles","Computer","podcast","Google","Apple","Live","Street Food","Cricket","Basketball","Movtivation","High School DXD","Overflow","music"]
    return (
        
        <div className="h-18 p-4 my-5 flex space-x-2 ">
            {list.map((li,index)=>{
            return    <button key={index} className="text-sm font-semibold border border-gray-200 w-fit p-2 rounded-md bg-black text-white whitespace-nowrap">{li}</button>
            })}
        </div>
    )
}

export default ButtonList;