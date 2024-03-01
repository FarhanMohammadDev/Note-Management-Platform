"use client";
import {
  getOneNoteThunk,
  updateNoteThunk,
} from "@/lib/features/notes/notesSlice";
import { AppDispach, RootState } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const page = ({ params }: { params: { id: string } }) => {
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
  //   const note = notes.find(note=> note._id === id);
  //   console.log("note :" ,note);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);

    dispatch(updateNoteThunk(formData));
    router.push('/')
    // setFormData(
    //     {
    //         id:"",
    //         title: "",
    //         status :"",
    //         content: ""
    //     }
    // );
  };

  if (isLoading ) {
    return <h1>loading ....</h1>
  }



  return (
    <div className="flex flex-col w-full mb-5 sm:flex-row">
      <div className="max-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Create a new Note</h1>

              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <div className="flex gap-4">
                  <input
                    value={formData?.title}
                    type="text"
                    name="title"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white text-black px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Title *"
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div className="my-6 flex gap-4">
                  <select
                    value={formData?.status}
                    name="status"
                    id="select"
                    title="Select an status"
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
                <div className="">
                  <textarea
                    value={formData?.content}
                    name="content"
                    id="text"
                    cols={20}
                    rows={10}
                    title="Please enter your message"
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black "
                  >
                    content ...
                  </textarea>
                </div>
              </div>

              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Edit note "
                />
                <Link
                  href="/"
                  className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                >
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p className="z-10">All Notes</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
