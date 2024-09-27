import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/ThemeSlice";
const DarkMode = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark); // Get the current theme state from Redux

  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Dispatch the toggleTheme action
  };

  return (
    <div
      className={`w-20 h-8 flex m-4 ml-10 rounded-xl p-1 cursor-pointer transition-colors duration-500 ${
        isDark ? "bg-gray-800" : "bg-yellow-200"
      }`}
      onClick={toggleThemeHandler}
    >
      <div
        className={`w-8 h-6 rounded-full transition-transform transform duration-500 ease-in-out ${
          isDark ? "translate-x-full bg-gray-600" : "bg-blue-200"
        }`}
      >
        <i
          className={`flex  justify-center w-full h-full transition-transform duration-500 ${
            isDark ? "ri-sun-line text-yellow-300" : "ri-moon-fill text-gray-900"
          }`}
        ></i>
      </div>
    </div>
  );
};

export default DarkMode;
