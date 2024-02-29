"use client";
import { fetchNotesThunk } from "@/lib/features/notes/notesSlice";
import { AppDispach, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNote from "../components/ItemNote";

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
    console.log("useEffect const getANotes :", notes);
  }, [dispatch]);

  console.log(notes);

  return (
    <>
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
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Add Notes
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">Button Add NOTE</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Filter Notes
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">select filtrage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {notes.map((note, index) => {
              return (
                <ItemNote
                  key={index}
                  title={note.title}
                  description={note.content}
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

    {/* --------------------------------------------------------------------------------------------------------- */}
    
    {/* --------------------------------------------------------------------------------------------------------- */}
    </>
  );
}
