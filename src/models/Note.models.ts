import { Schema, model, Document } from "mongoose";

interface NoteInterface extends Document {
  title: string;
  content: string;
  status: string;
}

const noteSchema = new Schema<NoteInterface>(
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

const NoteModel = model<NoteInterface>("Note", noteSchema);
export default NoteModel;
