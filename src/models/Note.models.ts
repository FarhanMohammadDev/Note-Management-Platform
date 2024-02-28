import { Schema, model, Document, Types } from "mongoose";

interface Note extends Document {
  title: string;
  content: string;
  status: string;
}

const noteSchema = new Schema<Note>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : [ "to do" , "doing" , "done" ],
      default: 'to do'
    },
  },
  { timestamps: true }
);

const NoteModel = model<Note>("Note", noteSchema);
export default NoteModel;
