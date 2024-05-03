import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";





const SideBar = () => {
  return (
    <div className="fixed h-full w-64 bg-gray-400 dark:bg-gray-900 text-white">
      <div className="flex items-center justify-center h-16 bg-gray-500 dark:bg-gray-800">
        <h1 className="text-lg font-bold"><IoHome /></h1>
      </div>
      <ul className="mt-4 ">
        <li className="py-2 px-4 hover:bg-gray-700 "> <RiDashboard3Fill/>Dashboard</li>
        <li className="py-2 px-4 hover:bg-gray-700"><FaProjectDiagram/>Projects</li>
        <li className="py-2 px-4 hover:bg-gray-700"><FaTasks/>Tasks</li>
        <li className="py-2 px-4 hover:bg-gray-700"><CiSettings/>Settings</li>
      </ul>
    </div>
  );
};

const NavBar = () => {

const [theme, setTheme]= useState("light");

useEffect(()=>{
    if(theme ==="dark"){
        document.documentElement.classList.add('dark');

    }else{
        document.documentElement.classList.remove("dark")
    }
},[theme]);

const handleThemeSwitch=()=>{
    setTheme(theme ==="dark" ? "light" : "dark");
};


  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
    <div className=" bg-gray-500 dark:bg-gray-950 text-white">
      <div className="flex justify-between items-center py-4 px-6">
        <button className="text-xl" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="text-lg font-bold cursor-pointer" onClick={handleThemeSwitch}>😉</h1>
      </div>
      {sidebarOpen && <SideBar />}
    </div>
  );
};

export default NavBar;