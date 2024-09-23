import profile from "../img/profile.jpg"

const LiveChat=({name,message})=>{
    console.log(name);
    
    return (
        <div className="border flex  gap-4 h-10 w-90 m-2  ">
            <span>
              <img className="w-8 h-8 rounded-full" src={profile} alt="chat-img"/>
            </span>
            <span className="font-bold mt-1">{name}</span>
            <span className="w-90 h-fit flex flex-wrap mt-1">{message}</span>
        </div>
    )
}

export default LiveChat;