import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const loginUser = createAsyncThunk(
    'user/login',
    async (data) => {
        const res = await customAxios.post('login', data)
        return res
    }
)