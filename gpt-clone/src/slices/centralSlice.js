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
        },
        addToRecent : (state,action)=>{
            state.recent.push(action.payload);
        }
    }
})

export const {toggleSidebar,addToRecent} = centralSlice.actions;
export default centralSlice.reducer;