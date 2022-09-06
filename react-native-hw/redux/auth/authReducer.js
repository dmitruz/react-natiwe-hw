import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        mickname: null,
    },
    reducers: {},
});