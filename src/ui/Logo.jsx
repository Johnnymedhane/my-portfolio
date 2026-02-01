import { useNavigate } from "react-router-dom";

import { useAppContext } from "../contexts/contextApi";
function Logo() {
  const navigate = useNavigate();
  const { setSelectedNav } = useAppContext();
  function handleClick() {
    setSelectedNav("");
    navigate("/");
  }
  return (
    <div className="logo">
      <div onClick={handleClick}>
        <span> JM</span>
      </div>
    </div>
  );
}

export default Logo;
