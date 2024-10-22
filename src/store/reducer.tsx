import {configureStore, createSlice} from '@reduxjs/toolkit'

export const uiReducer = createSlice({
    name: 'ui',
    initialState: {
        mainModal: false,
        isCopyTooltip: false,
        disconnectModal: false
    },
    reducers: {
        openMainModal: (state, action) => {
            state.mainModal = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { openMainModal } = uiReducer.actions
export const store = configureStore({
    reducer: {
        ui: uiReducer.reducer,
    }
})