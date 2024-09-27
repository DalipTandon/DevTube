import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/messageSlice";
import { generateName } from "../utils/Helper";
const LiveContainer=()=>{
   
   const[liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{

        const data=setInterval(()=>{
           dispatch(addMessages({
            name:generateName(),
            comment:"Welcome to Devtube🚀",
           })
        );
            
        },2000);
        return(()=>{
            clearInterval(data);
        })
    },[])
    return (
        <>
        <div className="bg-slate-100 h-[500px] w-11/12 p-3 ml-2 mt-10 rounded-lg overflow-y-scroll flex-col flex ">
            <div className="mt-auto">
            {chatMessage.map((c,i)=>(
                <LiveChat key={i} name={c.name} message={c.comment}/>
            ))}
            </div>
        </div>
        <form className=" m-2 text-center " onSubmit={(e)=>{
        e.preventDefault()
            dispatch(addMessages({
                name:"User",
                comment:liveMessage
            }))
            setLiveMessage("");
        }
        }>
          <input className="w-96 bg-slate-100 border border-black p-1 rounded-sm text-black"  type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
          <button className="w-20 p-1 bg-black-100">Send</button>
        </form>
        </>
    )
}

export default LiveContainer;