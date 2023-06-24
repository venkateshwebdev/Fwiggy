import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        items:[],
        price:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            console.log(action.payload)
            // state.items.map((e, index)=>{
            //     if(e.id===action.payload.id){
            //         console.log(index)
            //         state.items.splice(index,1)
            //     }

            // })
            state.items = state.items.filter(item => item.id !== action.payload.id)
            // const index = state.items.findIndex(item => item.id === action.payload.id)
            
        },
        clearCart:()=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer;