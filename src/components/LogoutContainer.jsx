import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        className="btn loggout-btn"
        onClick={() => {
          setShowLogout(!showLogout);
          console.log(logOutUser);
        }}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logOutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
