import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { itemApi } from '../../api/itemApi'
import { changeFilterAction } from '../actions/changeFilter'


const initialState = {
    title: null as null | string,
    items: null as null | ItemType[],
    commentsCount: 0,
    loading: true,
    page:{
        current: 0,
        max: 1
    },
    filter:{
        ascending: {
            title: null as null|boolean,
            domain: null as null|boolean,
            date: null as null|boolean,
        } 
    },
}

export const fetchItem = createAsyncThunk(
    'item/fetchItem',
    async (id: string) => {
        return await itemApi.getItem(id) as ItemType
    }
)

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        changeFilter: changeFilterAction
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItem.pending, (state, action) => {
            state.loading = true
            state.items = []
            state.commentsCount = 0
        })
        builder.addCase(fetchItem.fulfilled, (state, action) => {
            state.page.current = 1
            state.items = action.payload.comments
            state.commentsCount = action.payload.comments_count
            state.title = action.payload.title
            state.loading = false
        })
    },
})

export const { changeFilter } = itemSlice.actions

export default itemSlice.reducer

export type ItemStateType = typeof initialState

export type ItemType = {
    id: number;
    title: string;
    points: number | null;
    user: string | null;
    time: number;
    time_ago: string;
    content: string;
    deleted?: boolean;
    dead?: boolean;
    type: string;
    url?: string;
    domain?: string;
    comments: ItemType[];
    level: number;
    comments_count: number;
}

