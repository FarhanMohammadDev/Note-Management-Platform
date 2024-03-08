import { useRouter } from 'next/navigation';
import { FC } from 'react'
import { FaPlus } from "react-icons/fa";

interface AddNoteProps {

}

const AddNote: FC<AddNoteProps> = () => {

    const router = useRouter();

    return (
        <div
            className="box-decoration-slice max-w-sm flex justify-center items-center outline-dashed outline-2 outline-offset-2 rounded-lg bg-slate-200 hover:bg-slate-300 shadow cursor-pointer drop-shadow-xl h-70 "
            onClick={() => router.push('/dashboard/notes/create')}
        >
            <span className="flex items-center mb-2 text-xl font-bold tracking-tight  dark:text-slate-600 hover:pointer min-h-64">
                <FaPlus />
            </span>
        </div>
    );
}

export default AddNote;