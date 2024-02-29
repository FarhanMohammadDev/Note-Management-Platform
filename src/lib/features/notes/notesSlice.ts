import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Note {
    title: string;
    content: string;
    status: string;
}
// ------------------------------------------Api Calls-------------------------------------------

export const fetchNotesThunk = createAsyncThunk(
    'notes/getAllNotes',
    async () => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              const data = await res.json()
                console.log("Notes Thunk", data);
              return data

        } catch (error:any) {
            return error.response;
        }
    }
);



// -------------------------------------------------------------------------------------
const initialState= {
    isLoading: false,
    notes: [],
    error: "",
  };
  
  const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // pending
      builder.addCase(fetchNotesThunk.pending, (state) => {
        state.isLoading = true;
      });
  
      // fulfilled
      builder.addCase(fetchNotesThunk.fulfilled, (state, action) => {
        console.log("fetchNotesThunk",action.payload);
        
        state.isLoading = false;
        state.notes = action.payload;
      });
  
      // rejected
      builder.addCase(fetchNotesThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = "Request failed with status code 401";
      });
    }
  })
  

  const noteReducer = noteSlice.reducer;
  const noteActions = noteSlice.actions;
  
  export { noteReducer, noteActions }





