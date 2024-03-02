import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

interface SidebarProps {
    isShow: boolean;
    onShow: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isShow, onShow }) => {

    if (isShow) {
        return (
            <div className="min-h-screen md:flex flex-col w-64 bg-gray-900">
                <div className="flex items-center justify-center h-16 py-10 bg-gray-900">
                    {/* <span className="text-white font-bold uppercase">Sidebar</span> */}
                    <Logo />
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    {/* Button section  */}
                    <Button />
                    <nav className="flex-1 px-2 py-4 bg-gray-900">
                        <span
                            onClick={onShow}
                            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Dashboard
                        </span>
                        <Link href="/dashboard/notes" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            All tasks
                        </Link>
                        <Link href="/dashboard/notes" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg> */}
                            🔴 Important tasks
                        </Link>
                        <Link href="/dashboard/notes" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg> */}
                            🟢 Completed tasks
                        </Link>
                        <Link href="/dashboard/notes" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg> */}
                            🟡 Uncompleted tasks
                        </Link>
                    </nav>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Sidebar;