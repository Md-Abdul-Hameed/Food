import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], length: 0
    },
    reducers: {
        addItem: (state, action) => {
            let item = { ...action.payload }
            let countUpdated = false;
            state.items.forEach((i) => {
                if (i.id === item.id) {
                    i.count += 1;
                    countUpdated = true;

                }
            })
            if (!countUpdated) {
                item.count = 1;
                state.items.push(item)
            }
            state.length += 1
        },
        removeItem: (state, action) => {
            let tempItems = []
            state.items.forEach((item) => {
                let temp = { ...item };
                if (item.id === action.payload) {
                    if (item.count > 1) {
                        temp.count -= 1;
                        tempItems.push(temp)
                    } else { };
                } else tempItems.push(temp)
            })
            return { items: tempItems, length: state.length - 1 };
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;