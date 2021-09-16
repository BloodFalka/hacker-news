import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jobsApi } from '../../api/jobsApi'
import { changeFilterAction } from '../actions/changeFilter'
import { sortAction } from '../actions/sortAction'
import { createInitState, FeedItem } from './feed-reducer'

const initialState = createInitState(1)

export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async (page: number) => {
        return await jobsApi.getJobs(page) as Array<FeedItem>
    }
)

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        changeFilter: changeFilterAction
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            const old = state.items ? state.items : []
            state.items = [...old, ...action.payload]
            state.loading = false

            if(state.page.current !== state.page.max)state.page.current += 1
        })
    },
})

export const { changeFilter } = jobsSlice.actions

export default jobsSlice.reducer