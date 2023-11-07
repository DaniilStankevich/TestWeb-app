import { createSlice } from "@reduxjs/toolkit"
import { creamSliceState } from "./types"

const initialState: creamSliceState  = {
    items: [],
}


const creamSlice = createSlice({
    name: 'cream',
    initialState,
    
    reducers: { 
      
              setItems(state, action ) {
                  state.items = action.payload
              }, 
    },
  

  
  })

export default creamSlice.reducer
