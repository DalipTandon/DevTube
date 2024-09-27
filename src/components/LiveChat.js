import { useSelector } from "react-redux";
import profile from "../img/profile.jpg";

const LiveChat = ({ name, message }) => {
  const isDark = useSelector((store) => store.theme.isDark);

  return (
    <div
      className={`border flex gap-4 h-10 w-90 m-2 p-2 rounded-md ${
        isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
      } transition-colors duration-300`}
    >
      <span>
        <img className="w-8 h-8 rounded-full" src={profile} alt="chat-img" />
      </span>
      <span className={`${isDark ? "text-blue-400" : "text-black"}`}>
        {name}
      </span>
      <span className={`${isDark ? "text-gray-300" : "text-gray-500"}`}>
        {message}
      </span>
    </div>
  );
};

export default LiveChat;
