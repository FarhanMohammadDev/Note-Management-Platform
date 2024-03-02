"use client"

import { FC, useState } from 'react'
import { NoteData } from "@/app/constants/types/noteItem";
import ButtonActions from "./ButtonActions";
import EditIcon from "@/assets/EditIcon";
import ViewIcon from "@/assets/ViewIcon";
import DeleteIcon from "@/assets/DeleteIcon";
import { useRouter } from 'next/navigation';

interface NoteDataProps {
    data: NoteData;
    onShow: () => void;
}

const NoteItem: FC<NoteDataProps> = ({ data, onShow }) => {

    const router = useRouter();
    return (
        <>
            <div
                className="max-w-sm p-6 border-1 border-gray-900 rounded-lg bg-slate-100 shadow cursor-pointer drop-shadow-xl h-70"
                onDoubleClick={() => router.push(`/dashboard/notes/${data.id}`)}
            >
                <div>
                    {data.priority === 'important' ?
                        (
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                {data.priority}
                            </span>
                        )
                        :
                        // null
                        (
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300">
                                {data.priority}
                            </span>
                        )
                    }
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-slate-900 hover:pointer">
                    {data.title}
                </h5>
                <hr />
                <article className="mb-2 font-normal text-gray-900 dark:text-gray-600 h-24 md:line-clamp-4 sm:line-clamp-1 overflow-hidden">
                    {data.description}
                </article>

                <div className="flex justify-between">
                    {/* <Status status={status} /> */}

                    <span className="bg-red-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        Deadline : {data.deadline}
                    </span>

                    <span className="bg-red-100 text-blue-900 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-400 dark:text-blue-900">
                        Created at : {data.created_at}
                    </span>
                </div>

                <div className='inline-flex items-center rounded-md shadow-sm mt-4'>
                    <ButtonActions icon={<EditIcon />}
                        text="Edit"
                        onClick={() => router.push('/dashboard/notes/:id/edit')}
                    />
                    <ButtonActions icon={<ViewIcon />}
                        text="View"
                        onClick={() => router.push('/dashboard/notes/:id')}
                    />
                    <ButtonActions icon={<DeleteIcon />}
                        text="Delete"
                        onClick={onShow}
                    />        
                </div>
            </div>
        </>
    )
}

export default NoteItem;