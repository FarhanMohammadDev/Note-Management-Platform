// Create a Reusable Button Component: 
"use client"
import { ButtonProps } from '@/app/constants/types/buttonActions'
import React from 'react'

const ButtonActions: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
    return (
        <button
            className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded font-medium px-4 py-2 inline-flex space-x-1 items-center"
            onClick={onClick}
        >
            <span>{icon}</span>
            <span className="hidden md:inline-block">{text}</span>
        </button>
    )
}

export default ButtonActions