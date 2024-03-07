"use client";

import { useEffect, useState } from "react";
import AddNote from "@/components/AddNote";
import Modal from "@/components/Modal";
import { AppDispach, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNoteThunk,
  fetchNotesThunk,
} from "@/lib/features/notes/notesSlice";
import ItemNote from "@/components/ItemNote";

export default function Notes() {
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

  console.log("notes :", notes);

  const deleteNote = async (id: string) => {
    await dispatch(deleteNoteThunk(id));
    getANotes();
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  // --------------------------------------------------------
  return (
    <div className="p-5 flex flex-col">
      <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
      <p className="mt-2 text-gray-600">
        Organize your day more easily with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 pb-14">
        {notes.map(
          (
            note: {
              _id: string;
              title: string;
              content: string;
              status: string;
              createdAt: string;
            },
            index: any
          ) => {
            return (
              <ItemNote
                data={note}
                key={index}
                deleteNote={deleteNote}
                onShow={handleShowModal}
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
          }
        )}
        <AddNote />
      </div>
      {showModal ? <Modal onShow={handleShowModal} deleteNote={deleteNote} /> : null}
    </div>
  );
}
