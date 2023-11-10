import axios from "axios";
import { FetchСreamArgs, Cream } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Так как "fetchCreams" возращает промис, то в "extraReducers" можно вызывать соответсвующие методы согласну состоянию этого промиса
export const fetchCreams = createAsyncThunk<Cream[], FetchСreamArgs>(
  "cream/fetchCreamsStatus",
  async (params, thunkApi) => {
    const { sortBy, order, category, searchHome, currentPage } = params;

    const { data } = await axios.get(
      `https://6549f6a5e182221f8d523a29.mockapi.io/api/v1/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchHome}`
    );

    if (data.length === 0) {
      return thunkApi.rejectWithValue("Товаров нету");
    }

    //thunkApi.fulfillWithValue(data)
    return data;
  }
);
