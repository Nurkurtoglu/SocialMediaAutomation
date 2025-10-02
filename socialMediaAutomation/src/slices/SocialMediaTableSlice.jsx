import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const initialState = {
    mediaInfo: [],
    // status: "idle",
    // error: null
}

export const getMediaData = createAsyncThunk("media/fetchMedia", async () => {

    const res = await axios.get(API_URL);
    console.log(res.data)
    return res.data;
});



export const deleteMediaData = createAsyncThunk("media/deleteMedia", async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return id;
});

export const updateMediaData = createAsyncThunk("media/updateMedia", async ({ id, mediaInfo }) => {
    const res = await axios.patch(`${API_URL}/${id}`, mediaInfo);
    return res.data;
});

export const socialMediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMediaData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMediaData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.mediaInfo = Array.isArray(action.payload) ? action.payload : [];
            });

        builder.addCase(updateMediaData.pending, (state) => {
            //state.status = "loading";
        }).addCase(updateMediaData.fulfilled, (state, action) => {
            //state.status = "succeeded";
            state.mediaInfo = state.mediaInfo.map((info) =>
                info.id === action.payload.id ? action.payload : info
            );

        });

        builder.addCase(deleteMediaData.pending, (state) => {
            //state.status = "loading";
        }).addCase(deleteMediaData.fulfilled, (state, action) => {
            //state.status = "succeeded";
            state.mediaInfo = state.mediaInfo.filter((info) => info.id !== action.payload);
        });
    }
});

// this is for dispatch
export const { } = socialMediaSlice.actions;

// this is for configureStore
export default socialMediaSlice.reducer;