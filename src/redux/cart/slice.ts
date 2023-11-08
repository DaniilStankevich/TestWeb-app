import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartSliceState, MyActionPayload } from "./types";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const { totalPrice, items } = getCartFromLS()

const initialState: CartSliceState  = {
    totalPrice, 
    items,  
    amountPizzas: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {   

        // Здесь я создал один метод как добаления в товара в корзину, так и увеличение его колличества
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find((obj) => action.payload.id === obj.id)

            if( findItem ) {
                findItem.count++ }
            else {
                state.items.push({...action.payload, count: 1 })  
            }

            state.totalPrice =  calcTotalPrice(state.items)                        
            state.amountPizzas = state.items.reduce((sum, obj) => {
                return obj.count  + sum
            }, 0)
        },

        minusItem(state, action: PayloadAction<MyActionPayload>) {        
            const findItem = state.items.find((obj) => obj.id === action.payload.id )

            if (findItem && findItem.count > 1 ) {
                findItem.count--  
            }
            state.totalPrice = calcTotalPrice(state.items)
        }, 



        

        removeItem(state, action: PayloadAction<number>) {
            state.items  = state.items.filter((obj) => obj.id  != action.payload)
            state.totalPrice = calcTotalPrice(state.items)
        },





        clearItem(state) {
            state.items = []
            state.totalPrice = 0
        },
        
  }
})


export const { addItem,  minusItem,  removeItem, clearItem } = cartSlice.actions
export default cartSlice.reducer

