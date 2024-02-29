"use client"
import { fetchNotesThunk } from "@/lib/features/notes/notesSlice";
import { AppDispach, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  
const dispatch = useDispatch<AppDispach>();
const { isLoading, notes, error } = useSelector((state: RootState) => state.notes);
useEffect(() => {
  dispatch(fetchNotesThunk());
}, [dispatch]);
console.log(notes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world !</h1>
    </main>
  );
}
