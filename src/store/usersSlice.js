import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
        filteredUsers: [],
    },
    reducers: {
        filterUsers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredUsers = state.users.filter(user =>
                user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.filteredUsers = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;