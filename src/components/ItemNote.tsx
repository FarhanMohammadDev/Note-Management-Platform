"use client"
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  title: string;
  content: string;
  styleColor: string;
  deleteNote: (id: string) => Promise<void>
}

const ItemNote: React.FC<Props> = ({ id, title, content, styleColor , deleteNote }) => {

  return (
    <div className="w-full mb-10 sm:mb-0 sm:w-1/2 ">
      <div className="bg-blue-400 hidden " />
      <div className="bg-green-500  hidden" />
      <div className="bg-yellow-400 hidden" />
      <div className="relative h-full ml-0 mr-0 sm:mr-10">
        <span
          className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${styleColor} rounded-lg`}
        ></span>
        <div
          className={`relative h-full p-5 bg-white border-2 border-${styleColor} rounded-lg`}
        >
          <div className="flex items-center -mt-1">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
              {title}
            </h3>
          </div>
          <p
            className={`mt-3 mb-1 text-xs font-medium text-${styleColor} uppercase`}
          >
            ------------
          </p>
          <p className="mb-2 text-gray-600">{content}</p>
        </div>
        <button
        onClick={()=>{deleteNote(id)}}
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
          title="Attach"
        >
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link
          href={`/notes/edit/${id}`}
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
        >
          <svg className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ItemNote;
