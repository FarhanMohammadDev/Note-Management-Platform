import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Note {
  _id?: string ;
  title: string;
  content: string;
  status: string;
}

export interface InitialNote {
  _id?: string;
  isLoading: boolean;
  notes: Note[];
  selectedNote:{},
  error: string;
}
// ------------------------------------------Api Calls-------------------------------------------

export const fetchNotesThunk = createAsyncThunk(
  "notes/getAllNotes",
  async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Notes Thunk", data);
      return data;
    } catch (error: any) {
      return error.response;
    }
  }
);

// Création d'une fonction thunk pour ajouter une nouvelle note
export const addNoteThunk = createAsyncThunk(
  "notes/addNote",
  async (newNote: Note) => {
    try {
      const response = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });
      console.log("response Add note :", response);
      
      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

// by id

// Thunk pour récupérer une note par son ID
export const getOneNoteThunk = createAsyncThunk(
  "notes/getOneNote",
  async (noteId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/notes/${noteId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get note");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

// Thunk pour mettre à jour une note
export const updateNoteThunk = createAsyncThunk(
  "notes/updateNote",
  async (updatedNote: Note) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/notes/${updatedNote._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNote),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

// Thunk pour supprimer une note
export const deleteNoteThunk = createAsyncThunk(
  "notes/deleteNote",
  async (noteId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/notes/${noteId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      return noteId;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

// -------------------------------------------------------------------------------------
const initialState: InitialNote = {
  isLoading: false,
  notes: [],
  selectedNote : {},
  error: "",
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  GET All Notes
    // pending
    builder.addCase(fetchNotesThunk.pending, (state) => {
      state.isLoading = true;
    });

    // fulfilled
    builder.addCase(fetchNotesThunk.fulfilled, (state, action) => {
      console.log("fetchNotesThunk", action.payload);
      state.isLoading = false;
      state.notes = action.payload;
    });

    // rejected
    builder.addCase(fetchNotesThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = "Request failed with status code 401";
    });
    // GET ONE Note
    builder.addCase(getOneNoteThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getOneNoteThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("getOneNoteThunk selectedNote :",action.payload);
      
      state.selectedNote = action.payload;
    });

    builder.addCase(getOneNoteThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = "Failed to fetch the note";
    });
  },
});

const noteReducer = noteSlice.reducer;
const noteActions = noteSlice.actions;

export { noteReducer, noteActions };
