import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Navbar, SmallSideBar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashBoardLayout = () => {
  const user = { name: "john" };

  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setisDarkTheme(!isDarkTheme);
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
    console.log(showSideBar);
  };

  const logOutUser = async () => {
    console.log("User logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSideBar,
        logOutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashBoardLayout;
