import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;


const initialState = {
    mediaModalData: [],
    // status: "idle",
    // error: null
}

export const addMediaData = createAsyncThunk("media/addMedia", async (mediaModalData) => {
    const res = await axios.post(API_URL, mediaModalData);
    console.log(res);
    return res.data;
});


export const addMediaSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(addMediaData.pending, (state) => {
            //state.status = "loading";
        }).addCase(addMediaData.fulfilled, (state, action) => {
            //state.status = "succeeded";
            state.mediaModalData.push(action.payload);
        });

    }
});

// this is for dispatch
export const { } = addMediaSlice.actions;

// this is for configureStore
export default addMediaSlice.reducer;