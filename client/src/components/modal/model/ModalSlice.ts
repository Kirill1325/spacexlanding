import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'ModalSlice',
    initialState: {
        isOpened: false
    },
    reducers: {
        toggleModal(state) {
            state.isOpened = !state.isOpened
        }
    }
})


const { actions, reducer } = ModalSlice

export const { toggleModal } = actions

export default reducer