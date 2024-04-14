import Hi from "./Hi";
import { createContext } from "react";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";

export const ThemeContext = createContext(() => {});
const DarkMode = () => {
  const [dark, setDark] = useLocalStorage("dark", false);
  return (
    <div className={`h-screen w-screen ${dark ? "dark" : ""}`}>
      <ThemeContext.Provider value={setDark}>
        <Hi />
      </ThemeContext.Provider>
    </div>
  );
};

export default DarkMode;
