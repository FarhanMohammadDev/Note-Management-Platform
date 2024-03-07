"use client";
import { NoteData } from "@/app/constants/types/noteItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ButtonActions from "./ButtonActions";
import EditIcon from "@/assets/EditIcon";
import ViewIcon from "@/assets/ViewIcon";
import DeleteIcon from "@/assets/DeleteIcon";

interface Props {
  data: NoteData;
  styleColor: string;
  deleteNote: (id: string) => Promise<void>;
  onShow: () => void;
}

const ItemNote: React.FC<Props> = ({
  data,
  styleColor,
  deleteNote,
  onShow,
}) => {
  console.log(data);
  const router = useRouter();

  return (
    <>
      <div
        className="max-w-sm p-6 border-1 border-gray-900 rounded-lg bg-slate-100 shadow cursor-pointer drop-shadow-xl h-70"
        onDoubleClick={() => router.push(`/dashboard/notes/${data._id}`)}
      >
        {/* <div>
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
        </div> */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-slate-900 hover:pointer">
          {data.title}
        </h5>
        <hr />
        <article className="mb-2 font-normal text-gray-900 dark:text-gray-600 h-24 md:line-clamp-4 sm:line-clamp-1 overflow-hidden">
          {data.content}
        </article>

        <div className="flex justify-between">

          <span className="bg-red-100 text-blue-900 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-400 dark:text-blue-900">
            Created at : {data.createdAt}
          </span>
        </div>

        <div className="inline-flex items-center rounded-md shadow-sm mt-4">
          <ButtonActions
            icon={<EditIcon />}
            text="Edit"
            onClick={() => router.push(`/dashboard/notes/${data._id}/edit`)}
          />
          <ButtonActions
            icon={<ViewIcon />}
            text="View"
            onClick={() => router.push(`/dashboard/notes/${data._id}`)}
          />
          <ButtonActions icon={<DeleteIcon />} text="Delete" onClick={()=>{deleteNote(data._id)}} />
          {/* <ButtonActions icon={<DeleteIcon />} text="Delete" onClick={onShow} /> */}
        </div>
      </div>
    </>
  );
};

export default ItemNote;

