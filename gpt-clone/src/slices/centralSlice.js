import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showSidebar : false,
    recent : [],
}

const centralSlice = createSlice({
    name : 'centralSlice',
    initialState,
    reducers : {
        toggleSidebar : (state)=>{
            state.showSidebar = !state.showSidebar;
        }
    }
})

export const {toggleSidebar} = centralSlice.actions;
export default centralSlice.reducer;