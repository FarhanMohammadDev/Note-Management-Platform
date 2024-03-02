"use client"

import { useState } from "react";
import NoteItem from "../../../components/NoteItem";
import { NoteData } from "@/app/constants/types/noteItem";
import AddNote from "@/components/AddNote";
import Modal from "@/components/Modal";

export default function Notes() {


    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    // Testing data ------------------------------------------
    const [formData, setFormData] = useState<NoteData[]>([

        {
            id: "1",
            title: "Go to the Grocery",
            description: "Buy alimentation for this week",
            status: "Pending",
            priority: "important",
            created_at: "22/04/2024",
            deadline: "23/04/2024"
        },
        {
            id: "2",
            title: "Go to the Gym 🦾",
            description: "Legs day training",
            status: "Completed",
            priority: "not important",
            created_at: "22/04/2024",
            deadline: "23/04/2024"
        },
        {
            id: "3",
            title: "Learn Next.Js 💻",
            description: "Learn Next.js by reading the official documentation",
            status: "Uncompleted",
            priority: "important",
            created_at: "22/04/2024",
            deadline: "23/04/2024"
        },
        {
            id: "4",
            title: "Drinking water 🥤 eating healthy🥗",
            description: "Drink 2L water per day",
            status: "Completed",
            priority: "important",
            created_at: "22/04/2024",
            deadline: "23/04/2024"
        },
        {
            id: "5",
            title: "Chilling out with friends ✨",
            description: "Drink 2L water per day",
            status: "Completed",
            priority: "important",
            created_at: "22/04/2024",
            deadline: "23/04/2024"
        }
    ]);
    // --------------------------------------------------------

    return (
        // <div className="p-5 flex flex-col min-h-screen">
        <div className="p-5 flex flex-col">
            <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
            <p className="mt-2 text-gray-600">Organize your day more easily with us.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 pb-14'>
                {
                    formData.map((data, index) => (
                        <NoteItem key={index} data={data} onShow={handleShowModal} />
                    ))
                }
                <AddNote />
            </div>
            {
                showModal ? <Modal onShow={handleShowModal} /> : null
            }

        </div>
    )
}