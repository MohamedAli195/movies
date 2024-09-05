import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { IMovie } from '../../interfaces'

// Define a type for the slice state
export interface cartState {
  cart: IMovie[]
}

// Define the initial state using that type
const initialState: cartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMovieToCart:(state,action:PayloadAction<IMovie>)=>{
        const exist = state.cart.some((item)=>item.id ===action.payload.id)
        if (exist){
           const filterd= state.cart.filter((item)=>item.id!==action.payload.id)
        
           state.cart =[...filterd]
        }else{
    state.cart =[...state.cart,action.payload]

        }
    }
  }
})

export const { addMovieToCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectcart = (state: RootState) => state.cart

export default cartSlice.reducer