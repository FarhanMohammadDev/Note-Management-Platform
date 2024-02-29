"use client"

import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const Home: React.FC = () => {
  
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleToggleSidebar = () => {
    console.log("Toggle sidebar");
    setIsShow(!isShow);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isShow={isShow} onShow={handleToggleSidebar} />

      {/* Main content */}
      <MainContent onShow={handleToggleSidebar} />
    </div>
  );
};

export default Home;