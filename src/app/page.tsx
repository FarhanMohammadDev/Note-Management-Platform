"use client";
import { deleteNoteThunk, fetchNotesThunk } from "@/lib/features/notes/notesSlice";
import { AppDispach, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNote from "../components/ItemNote";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch<AppDispach>();
  const { isLoading, notes, error } = useSelector(
    (state: RootState) => state.notes
  );

  const getANotes = async () => {
    await dispatch(fetchNotesThunk());
  };

  useEffect(() => {
    getANotes();
  }, [dispatch]);

  console.log("notes :" , notes);

  const deleteNote = async (id:string) => { 
    await dispatch(deleteNoteThunk(id)) 
    getANotes();
  }
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        {" "}
        Note Management Platform
      </h2>
      <p className="mb-12 text-lg text-gray-500">
        Here is a few of the awesome Services we provide.
      </p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <Link
              href="/notes/create"
              className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Add New Note</p>
            </Link>
          </div>
          <div className="w-full sm:w-1/2"></div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row ">
          {notes.map((note, index) => {
            return (
              <ItemNote
                key={index}
                id={note._id}
                title={note.title}
                content={note.content}
                deleteNote = {deleteNote}
                styleColor={
                  note.status === "to do"
                    ? "yellow-400"
                    : note.status === "doing"
                    ? "blue-400"
                    : note.status === "done"
                    ? "green-500"
                    : ""
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
