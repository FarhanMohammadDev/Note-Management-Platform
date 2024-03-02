"use client"

import React, { FC } from 'react';

interface AddTaskProps { }

const AddTask: FC<AddTaskProps> = () => {

    return (
        <div className="max-w-xl mx-auto mt-16 flex flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                Create a new task
            </h2>
            <div className="mb-4">
                <label htmlFor="title" className="text-sm leading-7 text-gray-600">title</label>
                <input type="text" id="title" name="title" placeholder='Enter your title here' className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="text-sm leading-7 text-gray-600">description</label>
                <textarea
                    id="description"
                    placeholder='Enter your note here'
                    name="description"
                    className="appearance-none block h-32 w-full resize-none rounded border border-gray-300 bg-gray-200 text-gray-700 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 focus:bg-white"
                >
                </textarea>
            </div>

            <div className='mb-4'>
                <h4 className='text-sm leading-7 text-gray-600'>Priority</h4>
                <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
                <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500" for="toggle ">
                    <span className="sr-only">Enable</span>
                </label>
            </div>


            <button
                // className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                className="rounded border-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 text-lg font-bold focus:outline-none"
                onClick={() => console.log("Clicked!!")}
            >
                Save
            </button>
        </div>
    );
}

export default AddTask;
