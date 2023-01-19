import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const urlLink = 'https://finalspaceapi.com/api/v0/character';

export const feachData = createAsyncThunk('fetchData', async () => {
  try {
    const respo = await axios.get(urlLink, {
      AxiosHeaders: { 'cache-control': 'public, max-age=315576', 'content-length': '14892', 'Content-type': 'application/json' },
    });
    return respo.data;
  } catch (error) {
    return error;
  }
});

export const elementSlice = createSlice({
  name: 'spaces',
  initialState: {
    spaces: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feachData.fulfilled, (state, action) => ({
      ...state,
      spaces: action.payload,
    }));
  },
});

export const changeSearchTerm = elementSlice.actions;
export const renderSpaces = elementSlice.reducer;
