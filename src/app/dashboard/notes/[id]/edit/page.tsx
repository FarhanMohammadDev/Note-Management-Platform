"use client"

import { getOneNoteThunk, updateNoteThunk } from '@/lib/features/notes/notesSlice';
import { AppDispach, RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface AddTaskProps { }
// const EditNote: FC<AddTaskProps> = () => {

const EditNote= ({ params }: { params: { id: string } }) => {
    const statusList = ["to do", "doing", "done"];
    const { id } = params;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch<AppDispach>();
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { selectedNote ,isLoading} = useSelector((state: RootState) => state.notes);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
      _id: id,
      title: "",
      status: "",
      content: "",
    });
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const getNote = async () => {
        await dispatch(getOneNoteThunk(id));
      };
      getNote();
    }, [dispatch]);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setFormData({
          _id: id,
          title: selectedNote.title,
          status: selectedNote.status,
          content: selectedNote.content,
        });
    }, [selectedNote]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("formData", formData);
  
      dispatch(updateNoteThunk(formData));
      setFormData(
          {
              _id:"",
              title: "",
              status :"",
              content: ""
          }
      );
      router.push(`/dashboard/notes`);

    };
  
    if (isLoading ) {
      return <h1>loading ....</h1>
    }
  



    return (
        <div className="max-w-xl mx-auto mt-16 flex flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                Update task
            </h2>
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="text-sm leading-7 text-gray-600">
            title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Enter your title here"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="text-sm leading-7 text-gray-600">
            content
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            id="content"
            placeholder="Enter your note here"
            name="content"
            className="appearance-none block h-32 w-full resize-none rounded border border-gray-300 bg-gray-200 text-gray-700 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 focus:bg-white"
          ></textarea>
        </div>

        <div className="mb-4">
          <select
            name="status"
            id="select"
            title="Select an status"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          >
            {statusList.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item}
                  className="font-semibold text-slate-300"
                >
                  {" "}
                  {item.toUpperCase()}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          // className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          className="rounded border-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 text-lg font-bold focus:outline-none"
          onClick={() => console.log("Clicked!!")}
        >
          Update
        </button>
      </form>
        </div>
    );
}

export default EditNote;
