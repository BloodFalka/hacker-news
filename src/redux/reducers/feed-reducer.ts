import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { newsApi } from '../../api/newsApi'
import { changeFilterAction } from '../actions/changeFilter'
import { sortAction } from '../actions/sortAction'

export const createInitState = (maxPage: number) => {
    return{
        items: null as null | Array<FeedItem>,
        loading: true,
        page:{
            current: 0,
            max: maxPage
        },
        filter:{
            ascending: {
                title: null as null|boolean,
                domain: null as null|boolean,
                date: null as null|boolean,
            } 
        }
    }
}

const initialState = createInitState(10)

export const fetchNews = createAsyncThunk(
    'feed/fetchNews',
    async (page: number) => {
        return await newsApi.getNews(page) as Array<FeedItem>
    }
)

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        changeFilter: changeFilterAction
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            const oldNews = state.items ? state.items : []
            state.items = [...oldNews, ...action.payload]
            state.loading = false

            if(state.page.current !== state.page.max)state.page.current += 1
        })
    },
})

export const { changeFilter } = feedSlice.actions

export default feedSlice.reducer

export type ListStateType = typeof initialState

export type FiltersTypes = 'title'|'domain'|'date'
export type FiltersAscendingType = typeof initialState.filter.ascending
export type PageDataType = typeof initialState.page

export type FeedItem = {
    id: number;
    title: string;
    points?: number | null;
    user?: string | null;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url?: string;
    domain?: string;
}

