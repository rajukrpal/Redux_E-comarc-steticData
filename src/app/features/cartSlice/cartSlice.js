import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totlePrice:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            state.items.push(newItem);
            state.totlePrice += newItem.price;
        },
        removeToCart:(state,action)=>{
            const removedItemId  = action.payload;
            const removedItem = state.items.find(item => item.id === removedItemId);
             
            if(removedItemId){
                state.items = state.items.filter((item)=>item.id !== removedItemId)
                state.totlePrice -= removedItem.price
            }
        },
        clearCart:(state,action)=>{
            state.items =[] 
            state.totlePrice = 0
        }
    },
})

export const selectCartItem = (state)=>state.cart.items
export const selectTotlPrice = (state)=>state.cart.totlePrice.toFixed(2)

export const {addToCart , clearCart ,removeToCart} = cartSlice.actions;
export default cartSlice.reducer;