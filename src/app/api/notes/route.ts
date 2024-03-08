import connectDB from "@/configs/connectDb";
import NoteModel from "@/models/Note.models"
import {NextRequest, NextResponse } from "next/server"

// ---------------------------------------------------------------

export const GET = async (request: NextRequest) => {
  await connectDB();
  try {
    const notes = await NoteModel.find();
    return NextResponse.json(notes);

  } catch (error) {
    return NextResponse.json({ message: "fetching notes error" });
    // return NextResponse.json({error});
  }
};

// ---------------------------------------------------------------

export const POST = async (request: NextRequest) => {
  await connectDB();
  try {
    const {title,content,status} = await request.json();
    const newNote = await NoteModel.create({title,content,status});
    return NextResponse.json(newNote);
  } catch (error) {
    return NextResponse.json({ message: "add new note failler" });
    // return NextResponse.json({error});
  }
};


