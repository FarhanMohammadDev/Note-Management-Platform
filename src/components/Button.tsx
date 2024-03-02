"use client"

import { useRouter } from "next/navigation"

export default function Button() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-4 mb-4 md:flex-row">
            <button className="min-w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> router.push('/dashboard/notes/create')}
            >
                Add New Task
            </button>
        </div>
    )
}