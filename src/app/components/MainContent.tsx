"use client"

interface MainContentProps {
    onShow: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onShow }) => {

    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <div className="flex items-center px-4">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-700"
                        onClick={onShow}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                </div>
                <div className="flex items-center pr-4">

                    <button
                        className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
                <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
            </div>
        </div>
    )
}

export default MainContent;