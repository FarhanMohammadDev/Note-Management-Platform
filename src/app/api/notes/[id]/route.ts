import connectDB from "@/configs/connectDb";
import NoteModel from "@/models/Note.models";
import { NextResponse, NextRequest } from "next/server";
// ---------------------------------------------------------------

export const GET = async (request:NextRequest ,response:NextResponse, {params}:{params:{id:string}})  => {
  await connectDB();
    try {
       const { id } = params
       const findNoteById = await NoteModel.findById(id)
       return NextResponse.json(findNoteById)
    
   } catch (error) {
    return NextResponse.json({error : "Note note found"})
   }
}

// ---------------------------------------------------------------

export const PUT = async (request:NextRequest ,response:NextResponse, {params}:{params:{id:string}}) => {
  await connectDB();
    try {

      const { id } = params;
      const {title,content,status} = await request.json();
      const updatedNote = await NoteModel.findByIdAndUpdate( id, {title,content,status} )
      return NextResponse.json(updatedNote)

    } catch (error) {
      return NextResponse.json({message: error})
    }
  }

// ---------------------------------------------------------------

export const DELETE = async (request:NextRequest ,response:NextResponse, {params}:{params:{id:string}}) => {

    await connectDB();
    try {

      const { id } = params;
      await NoteModel.findByIdAndDelete(id)
      return NextResponse.json({message: "item deleted Successfully"})

    } catch (error) {

      return NextResponse.json({message: error})
    }
}

