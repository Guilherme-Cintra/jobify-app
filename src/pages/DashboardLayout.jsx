import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Navbar, SmallSideBar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();

const DashBoardLayout = () => {
  const user = { name: "john" };

  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setisDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
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
