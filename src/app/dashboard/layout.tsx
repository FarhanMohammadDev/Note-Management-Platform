"use client"

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Layout({ children }: { readonly children: React.ReactNode }) {

    const [isShow, setIsShow] = useState<boolean>(true);

    const handleToggleSidebar = () => {
        console.log("Toggle sidebar");
        setIsShow(!isShow);
    };

    return (
        <div className="flex flex-row h-screen md:flex-row overflow-hidden">
            <Sidebar isShow={isShow} onShow={handleToggleSidebar} />
            {/* <div className="flex flex-col flex-grow w-full overflow-auto"> */}
            <div className="flex flex-col flex-grow w-full">
                <Navbar onShow={handleToggleSidebar} />
                <div className="bg-slate-200 min-h-screen overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}