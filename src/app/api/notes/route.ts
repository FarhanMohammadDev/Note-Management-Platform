import connectDB from "@/configs/connectDb";
import NoteModel from "@/models/Note.models"
import {NextRequest, NextResponse } from "next/server"
// ---------------------------------------------------------------

export const GET = async (request: NextRequest ,response:NextResponse) => {
  await connectDB();
  try {
    const notes = await NoteModel.find();
    return NextResponse.json(notes);

  } catch (error) {
    return NextResponse.json({ error: "fetching notes error" });
  }
};

// ---------------------------------------------------------------


export const POST = async (request: NextRequest ,response:NextResponse) => {
  await connectDB();
  try {
    const {title,content,status} = await request.json();
    const newNote = await NoteModel.create({title,content,status});
    return NextResponse.json(newNote);
  } catch (error) {
    return NextResponse.json({ error: "add new note failler" });
  }
};













// export async function GET() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json()
 
//   return Response.json({ data })
// }

// ---------------------------------------------------------------

// export async function POST(request: NextRequest ,response:NextResponse) {
//   try {
//     const {title,content,status} = await request.json()
//     const existNote =await NoteModel.findOne({title})
//     if (existNote) {
//       return response.json();
//     }
//     const newNote = await NoteModel.create({title,content,status});
//     return response.json(newNote);
//   } catch (error) {
    
//   }




//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY!,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })
 
//   const data = await res.json()
 
//   return Response.json(data)
// }