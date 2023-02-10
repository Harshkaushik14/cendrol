import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersData = createAsyncThunk('fetchUsersData', async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    return await response.json();
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsersData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsersData.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error",action.payload);
            state.data = action.payload;
        });
    }
})

export default userSlice.reducer;