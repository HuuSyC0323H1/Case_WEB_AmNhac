import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await axios.get('http://localhost:8080/posts')
        return res;
    }
)