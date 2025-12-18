import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useAppContext } from "../contexts/contextApi";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useAppContext();
  return (
    <label className="switch">
      {isDarkMode ? (
        <span className="sun">
          <HiOutlineSun />
        </span>
      ) : (
        <span className="moon">
          <HiOutlineMoon />
        </span>
      )}

      <input type="checkbox" className="input" onClick={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  );
}

export default DarkModeToggle;
