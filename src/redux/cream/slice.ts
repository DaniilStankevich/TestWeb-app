import { createSlice } from "@reduxjs/toolkit"
import { Status, creamSliceState } from "./types"
import { fetchCreams } from "./asyncActions"

const initialState: creamSliceState  = {
    items: [],
    status: Status.LOADING, // loading | success | error 
}


const creamSlice = createSlice({
    name: 'cream',
    initialState,
    
    reducers: { 
      
              setItems(state, action ) {
                  state.items = action.payload
              }, 
    },

    extraReducers: (builder) => {
  
        builder.addCase(fetchCreams.pending, (state, action) => {
          state.status = Status.LOADING
          state.items = []
        })
    
        builder.addCase(fetchCreams.fulfilled, (state, action) => {
          state.items = action.payload
          state.status = Status.SUCCES
        })
    
        builder.addCase(fetchCreams.rejected , (state, action) => {
          state.status = Status.ERROR 
          state.items = []
        })
      }
    
})

export default creamSlice.reducer
