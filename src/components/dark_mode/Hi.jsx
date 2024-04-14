import { useContext } from "react";
import { ThemeContext } from "./DarkMode";

const Hi = () => {
  const setDark = useContext(ThemeContext);
  return (
    <div className="center h-screen w-screen flex-col gap-10 duration-500 dark:bg-black">
      <h1 className="text-5xl font-extrabold duration-1000 dark:text-white">
        hello world_
      </h1>
      <button
        onClick={() => setDark((dark) => !dark)}
        className="button border-gray-500 bg-black text-xl duration-500 hover:border-gray-700 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-400 "
      >
        change theme
      </button>
    </div>
  );
};

export default Hi;
